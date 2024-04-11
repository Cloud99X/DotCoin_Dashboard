import React, { useState } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import BTC_logo from "../../assets/svg/BTC.svg";
import ETH_logo from "../../assets/svg/ethereum.svg";
import Solana_logo from "../../assets/svg/solana-sol-logo.svg";
import XRP_logo from "../../assets/svg/XRP.svg";
import Doge_logo from "../../assets/svg/dogecoin.svg";

const PredictionModel = () => {
  const [currentSymbol, setCurrentSymbol] = useState("BTC");
  const [value, setValue] = useState(0);
  const [predictionData, setPredictionData] = useState(null);

  const handleMiniChartClick = (symbol) => {
    setCurrentSymbol(symbol);
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
      console.log('Predicted data:', data);
      setPredictionData(data);
    } catch (error) {
      console.error('Error predicting prices:', error);
    }
  };

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

  return (
    <PageLayout activeMenu={"Prediction Model"}>
      <div className="flex justify-between gap-32">
        <div className="bg-[#242731] h-[700px] w-full rounded-2xl px-10 py-6 text-white">
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
            <button className="bg-[#355DFF] hover:bg-blue-700 text-white font-bold w-[200px] h-16 rounded-lg" onClick={handlePredict}>
              Predict
            </button>
          </div>
          {predictionData && predictionData.predicted_price && (
            <div className="mt-6">
              <h4 className="text-2xl font-medium">Predicted Data</h4>
              <div className="overflow-y-scroll max-h-[400px]">
                <table className="table-auto w-[100px]">
                  <thead>
                    <tr>
                      <th className="border border-white">Day No</th>
                      <th className="border border-white">Predicted Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {predictionData.predicted_price.map((price, index) => (
                      <tr key={index}>
                        <td className="border border-white">{index + 1}</td>
                        <td className="border border-white">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-10">
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
                <h6 className="text-lg font-medium text-white">{symbol}</h6>
                <h6 className="text-xs font-medium text-[#808191]">{symbol}</h6>
              </div>
            </button>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default PredictionModel;
