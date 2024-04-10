import React, { useState } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import BTC_logo from "../../assets/svg/BTC.svg";
import ETH_logo from "../../assets/svg/ethereum.svg";
import Solana_logo from "../../assets/svg/solana-sol-logo.svg";
import XRP_logo from "../../assets/svg/XRP.svg";
import Doge_logo from "../../assets/svg/dogecoin.svg";
import two_lines from "../../assets/svg/dark.svg";
import upload_logo from "../../assets/svg/share.svg";

const PredictionModel = () => {
  const [currentSymbol, setcurrentSymbol] = useState("BTC");
  const [value, setValue] = useState(0);

  const handleMiniChartClick = (symbol) => {
    setcurrentSymbol(symbol);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

const handlePredict = async () => {
    try {
      const response = await fetch('http://localhost:8000/predict/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ day_number: value, symbol: currentSymbol }),
      });
      const data = await response.json();
      console.log('Predicted data:', data); // Log the received data
      // Set state or update UI with the received data
    } catch (error) {
      console.error('Error predicting prices:', error);
      // Handle error (e.g., show error message to the user)
    }
  };
  

  return (
    <PageLayout activeMenu={"Prediction Model"}>
      <div className="flex justify-between gap-32">
        <div className="bg-[#242731] h-[700px] w-full rounded-2xl px-10 py-6">
          {/* Your UI content for each symbol */}
          {/* I'm keeping it simple for demonstration */}
          <div className="flex justify-between items-center">
            <h4 className="text-2xl font-medium">Selected Symbol: {currentSymbol}</h4>
          </div>
          <div className="flex flex-row justify-center gap-20 items-center">
            <input
              className="text-black h-10 w-40 border rounded-md"
              type="number"
              value={value}
              onChange={handleChange}
            />

            <button className="bg-[#355DFF] hover:bg-blue-700 text-white font-bold w-[200px] h-16 rounded-lg " onClick={handlePredict}>
              Predict
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {/* Your symbol buttons */}
          {/* I'm keeping it simple for demonstration */}
          {['BTC', 'ETH', 'SOL', 'XRP', 'DOGE'].map(symbol => (
            <button
              key={symbol}
              className={`bg-[#242731] rounded-2xl w-[299px] h-[100px] flex items-center gap-5 pl-5 ${
                currentSymbol === symbol ? "border border-solid border-[#355DFF]" : ""
              }`}
              onClick={() => handleMiniChartClick(symbol)}
            >
              <img src={getLogoForSymbol(symbol)} alt="SVG" className="h-12 w-12" />
              <div className="text-left">
                <h6 className="text-lg font-medium">{symbol}</h6>
                <h6 className="text-xs font-medium text-[#808191]">{symbol}</h6>
              </div>
            </button>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

// Function to get logo for each symbol
const getLogoForSymbol = (symbol) => {
  switch (symbol) {
    case 'BTC':
      return BTC_logo;
    case 'ETH':
      return ETH_logo;
    case 'SOL':
      return Solana_logo;
    case 'XRP':
      return XRP_logo;
    case 'DOGE':
      return Doge_logo;
    default:
      return '';
  }
};

export default PredictionModel;
