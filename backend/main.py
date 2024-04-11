from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from tensorflow import keras
from keras.models import load_model
import joblib

app = FastAPI()

# CORS (Cross-Origin Resource Sharing) middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust as needed for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PredictionRequest(BaseModel):
    day_number: int = Field(..., ge=1, le=30)  # Validation: greater than or equal to 1, less than or equal to 30
    symbol: str

class PredictionResponse(BaseModel):
    day_number: int
    predicted_price: List[float]

# Load models and scalers
model_mapping = {
    "BTC": "bitcoin_model.h5",
    "ETH": "ethereum_model.h5",
    "SOL": "sol_model.h5",
    "XRP": "xrp_model.h5",
    "DOGE": "doge_model.h5",
}

scaler_mapping = {
    "BTC": "scaler_bitcoin.pkl",
    "ETH": "scaler_ethereum.pkl",
    "SOL": "scaler_sol.pkl",
    "XRP": "xrp_scaler.pkl",
    "DOGE": "scaler_doge.pkl",
}

dataset_mapping = {
    "BTC": "BTC-USD.csv",
    "ETH": "ETH-USD.csv",
    "SOL": "SOL-USD.csv",
    "XRP": "XRP-USD.csv",
    "DOGE": "DOGE-USD.csv",
}

loaded_models = {}
loaded_scalers = {}

for symbol, model_file in model_mapping.items():
    loaded_models[symbol] = load_model(f'models/{model_file}')

for symbol, scaler_file in scaler_mapping.items():
    loaded_scalers[symbol] = joblib.load(f'scalers/{scaler_file}')

# Function to predict future prices and print them up to the specified day number
def predict_future_prices(model, last_window, scaler, prediction_days=30, day_number=30):
    last_window_scaled = scaler.transform(last_window)
    new_X_test = np.array([last_window_scaled])
    new_X_test = np.reshape(new_X_test, (new_X_test.shape[0], new_X_test.shape[1], 1))
    pred_prices_scaled = model.predict(new_X_test)
    pred_prices = scaler.inverse_transform(pred_prices_scaled)
    predicted_prices = pred_prices[0]

    # Print the predicted prices up to the specified day number based on user input
    user_day_index = day_number - 1  # Adjusting for 0-based indexing
    if user_day_index < len(predicted_prices):
        predicted_prices_up_to_day = predicted_prices[:user_day_index + 1]
    else:
        predicted_prices_up_to_day = predicted_prices  # All available predictions

    print(f"User Input Number: {day_number}")
    for day, price in enumerate(predicted_prices_up_to_day, start=1):
        print(f"Day {day}: Predicted Price: {price}")

    return predicted_prices_up_to_day

# Route to handle prediction requests
@app.post("/predict", response_model=PredictionResponse)
async def predict_prices(request: PredictionRequest):
    day_number = request.day_number  # Extract day_number from the request
    symbol = request.symbol

    model = loaded_models.get(symbol)
    scaler = loaded_scalers.get(symbol)
    dataset = dataset_mapping.get(symbol)

    if not model or not scaler or not dataset:
        raise HTTPException(status_code=404, detail="Model, scaler, or dataset not found for the given symbol.")

    close_prices = pd.read_csv(f'Dataset/{dataset}')['Close'].values.reshape(-1, 1)
    last_60_days = close_prices[-60:]
    
    prediction = predict_future_prices(model, last_60_days, scaler, prediction_days=30, day_number=day_number)
    predicted_prices_up_to_day = prediction[:day_number]

    return {"day_number": day_number, "predicted_price": predicted_prices_up_to_day}

# Run the FastAPI server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
