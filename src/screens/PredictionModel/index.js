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
  return (
    <PageLayout activeMenu={"Prediction Model"}>
      <div className="flex justify-between gap-32">
        <div className="bg-[#242731] h-[700px] w-full rounded-2xl px-10 py-6">
          {currentSymbol === "BTC" && (
            <div className="flex flex-col justify-between gap-5 h-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <img src={BTC_logo} alt="SVG" className="h-14 w-14" />
                  <div className="flex flex-col min-w-[200px]">
                    <h4 className="text-2xl font-medium">Bitcoin</h4>
                    <h4 className="text-lg text-[#808191] font-medium">BTC</h4>
                  </div>
                  <img src={two_lines} alt="SVG" className="h-5 w-5 ml-10" />
                </div>
                <button className="flex items-center gap-2 justify-center flex-row w-28 h-12 border border-solid border-[#808191] rounded-xl">
                  <img src={upload_logo} alt="SVG" className="h-4 w-4" />
                  <h4 className="font-bold text-sm">Share</h4>
                </button>
              </div>
              {/* chart */}
              <div></div>
              <div className="flex flex-row justify-center gap-20 items-center">
                <input
                  className="text-black h-10 w-40 border rounded-md"
                  type="number"
                  value={value}
                  onChange={handleChange}
                />

                <button className="bg-[#355DFF] hover:bg-blue-700 text-white font-bold w-[200px] h-16 rounded-lg ">
                  Predict
                </button>
              </div>
            </div>
          )}
          {currentSymbol === "ETH" && (
            <div className="flex flex-col justify-between gap-5 h-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <img src={ETH_logo} alt="SVG" className="h-14 w-14" />
                  <div className="flex flex-col min-w-[200px]">
                    <h4 className="text-2xl font-medium">Ethereum</h4>
                    <h4 className="text-lg text-[#808191] font-medium">ETH</h4>
                  </div>
                  <img src={two_lines} alt="SVG" className="h-5 w-5 ml-10" />
                </div>
                <button className="flex items-center gap-2 justify-center flex-row w-28 h-12 border border-solid border-[#808191] rounded-xl">
                  <img src={upload_logo} alt="SVG" className="h-4 w-4" />
                  <h4 className="font-bold text-sm">Share</h4>
                </button>
              </div>
              {/* chart */}
              <div></div>
              <div className="flex flex-row justify-center gap-20 items-center">
                <input
                  className="text-black h-10 w-40 border rounded-md"
                  type="number"
                  value={value}
                  onChange={handleChange}
                />

                <button className="bg-[#355DFF] hover:bg-blue-700 text-white font-bold w-[200px] h-16 rounded-lg ">
                  Predict
                </button>
              </div>
            </div>
          )}
          {currentSymbol === "SOL" && (
            <div className="flex flex-col justify-between gap-5 h-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <img src={Solana_logo} alt="SVG" className="h-14 w-14" />
                  <div className="flex flex-col min-w-[200px]">
                    <h4 className="text-2xl font-medium">Solana</h4>
                    <h4 className="text-lg text-[#808191] font-medium">SOL</h4>
                  </div>
                  <img src={two_lines} alt="SVG" className="h-5 w-5 ml-10" />
                </div>
                <button className="flex items-center gap-2 justify-center flex-row w-28 h-12 border border-solid border-[#808191] rounded-xl">
                  <img src={upload_logo} alt="SVG" className="h-4 w-4" />
                  <h4 className="font-bold text-sm">Share</h4>
                </button>
              </div>
              {/* chart */}
              <div></div>
              <div className="flex flex-row justify-center gap-20 items-center">
                <input
                  className="text-black h-10 w-40 border rounded-md"
                  type="number"
                  value={value}
                  onChange={handleChange}
                />

                <button className="bg-[#355DFF] hover:bg-blue-700 text-white font-bold w-[200px] h-16 rounded-lg ">
                  Predict
                </button>
              </div>
            </div>
          )}
          {currentSymbol === "XRP" && (
            <div className="flex flex-col justify-between gap-5 h-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <img src={XRP_logo} alt="SVG" className="h-14 w-14" />
                  <div className="flex flex-col min-w-[200px]">
                    <h4 className="text-2xl font-medium">XRP</h4>
                    <h4 className="text-lg text-[#808191] font-medium">XRP</h4>
                  </div>
                  <img src={two_lines} alt="SVG" className="h-5 w-5 ml-10" />
                </div>
                <button className="flex items-center gap-2 justify-center flex-row w-28 h-12 border border-solid border-[#808191] rounded-xl">
                  <img src={upload_logo} alt="SVG" className="h-4 w-4" />
                  <h4 className="font-bold text-sm">Share</h4>
                </button>
              </div>
              {/* chart */}
              <div></div>
              <div className="flex flex-row justify-center gap-20 items-center">
                <input
                  className="text-black h-10 w-40 border rounded-md"
                  type="number"
                  value={value}
                  onChange={handleChange}
                />

                <button className="bg-[#355DFF] hover:bg-blue-700 text-white font-bold w-[200px] h-16 rounded-lg ">
                  Predict
                </button>
              </div>
            </div>
          )}
          {currentSymbol === "DOGE" && (
            <div className="flex flex-col justify-between gap-5 h-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <img src={Doge_logo} alt="SVG" className="h-14 w-14" />
                  <div className="flex flex-col min-w-[200px]">
                    <h4 className="text-2xl font-medium">Dogecoin</h4>
                    <h4 className="text-lg text-[#808191] font-medium">DOGE</h4>
                  </div>
                  <img src={two_lines} alt="SVG" className="h-5 w-5 ml-10" />
                </div>
                <button className="flex items-center gap-2 justify-center flex-row w-28 h-12 border border-solid border-[#808191] rounded-xl">
                  <img src={upload_logo} alt="SVG" className="h-4 w-4" />
                  <h4 className="font-bold text-sm">Share</h4>
                </button>
              </div>
              {/* chart */}
              <div></div>
              <div className="flex flex-row justify-center gap-20 items-center">
                <input
                  className="text-black h-10 w-40 border rounded-md"
                  type="number"
                  value={value}
                  onChange={handleChange}
                />

                <button className="bg-[#355DFF] hover:bg-blue-700 text-white font-bold w-[200px] h-16 rounded-lg ">
                  Predict
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-10">
          <button
            className={`bg-[#242731] rounded-2xl w-[299px] h-[100px] flex items-center gap-5 pl-5 ${
              currentSymbol === "BTC"
                ? "border border-solid border-[#355DFF]"
                : ""
            }`}
            onClick={() => handleMiniChartClick("BTC")}
          >
            <img src={BTC_logo} alt="SVG" className="h-12 w-12" />
            <div className="text-left">
              <h6 className="text-lg font-medium ">Bitcoin</h6>
              <h6 className="text-xs font-medium text-[#808191]">BTC</h6>
            </div>
          </button>
          <button
            className={`bg-[#242731] rounded-2xl w-[299px] h-[100px] flex items-center gap-5 pl-5 ${
              currentSymbol === "ETH"
                ? "border border-solid border-[#355DFF]"
                : ""
            }`}
            onClick={() => handleMiniChartClick("ETH")}
          >
            <img src={ETH_logo} alt="SVG" className="h-12 w-12" />
            <div className="text-left">
              <h6 className="text-lg font-medium ">Ethereum</h6>
              <h6 className="text-xs font-medium text-[#808191]">ETH</h6>
            </div>
          </button>
          <button
            className={`bg-[#242731] rounded-2xl w-[299px] h-[100px] flex items-center gap-5 pl-5 ${
              currentSymbol === "SOL"
                ? "border border-solid border-[#355DFF]"
                : ""
            }`}
            onClick={() => handleMiniChartClick("SOL")}
          >
            <img src={Solana_logo} alt="SVG" className="h-12 w-12" />
            <div className="text-left">
              <h6 className="text-lg font-medium">Solana</h6>
              <h6 className="text-xs font-medium text-[#808191]">SOL</h6>
            </div>
          </button>
          <button
            className={`bg-[#242731] rounded-2xl w-[299px] h-[100px] flex items-center gap-5 pl-5 ${
              currentSymbol === "XRP"
                ? "border border-solid border-[#355DFF]"
                : ""
            }`}
            onClick={() => handleMiniChartClick("XRP")}
          >
            <img src={XRP_logo} alt="SVG" className="h-12 w-12" />
            <div className="text-left">
              <h6 className="text-lg font-medium">XRP</h6>
              <h6 className="text-xs font-medium text-[#808191]">XRP</h6>
            </div>
          </button>
          <button
            className={`bg-[#242731] rounded-2xl w-[299px] h-[100px] flex items-center gap-5 pl-5 ${
              currentSymbol === "DOGE"
                ? "border border-solid border-[#355DFF]"
                : ""
            }`}
            onClick={() => handleMiniChartClick("DOGE")}
          >
            <img src={Doge_logo} alt="SVG" className="h-12 w-12" />
            <div className="text-left">
              <h6 className="text-lg font-medium ">Dogecoin</h6>
              <h6 className="text-xs font-medium text-[#808191]">DOGE</h6>
            </div>
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default PredictionModel;
