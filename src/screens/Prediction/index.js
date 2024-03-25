import React, { useState } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import { SymbolInfo } from "react-ts-tradingview-widgets";
import { MiniChart } from "react-ts-tradingview-widgets";

const Prediction = () => {
  // const [showSymbolInfo, setShowSymbolInfo] = useState("BTCUSD");
  // const [symbolData, setSymbolData] = useState({
  //   symbol: "BTCUSD",
  //   largeChartUrl: "http://localhost:3000/prediction?tvwidgetsymbol=BTCUSD",
  // });

  // const handleMiniChartClick = (symbol, largeChartUrl) => {
  //   setSymbolData({ symbol, largeChartUrl });
  // };

  const [symbolData, setSymbolData] = useState({
    symbol: "BTCUSD",
  });

  const handleMiniChartClick = (symbol) => {
    setSymbolData({ symbol });
  };
  return (
    // <PageLayout activeMenu={"Prediction"}>
    //   <div className="flex items-center">
    //     <div className="flex justify-center gap-5 mb-10 w-full h-full">
    //       <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
    //         <SymbolInfo
    //           colorTheme="dark"
    //           width={628}
    //           height={2000}
    //           symbol="BTCUSD"
    //         />
    //       </div>

    //       <div className="gap-2 mb-10 mt-10 ml-20">
    //         <MiniChart
    //           colorTheme="dark"
    //           width={300}
    //           height={176}
    //           symbol="BTCUSD"
    //           largeChartUrl="false"
    //           onClick={() => {
    //             setShowBTCInfo(true);
    //           }}
    //         />

    //         <MiniChart
    //           colorTheme="dark"
    //           width={300}
    //           height={176}
    //           symbol="ETHUSD"
    //         />
    //         <MiniChart
    //           colorTheme="dark"
    //           width={300}
    //           height={176}
    //           symbol="DOGEUSD"
    //         />
    //         <MiniChart
    //           colorTheme="dark"
    //           width={300}
    //           height={176}
    //           symbol="BTCUSD"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </PageLayout>
    // <PageLayout activeMenu={"Prediction"}>
    //   <div className="flex items-center">
    //     <div className="flex justify-center gap-5 mb-10 w-full h-full">
    //       <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
    //         {showSymbolInfo && (
    //           <SymbolInfo
    //             colorTheme="dark"
    //             width={628}
    //             height={2000}
    //             symbol={showSymbolInfo}
    //           />
    //         )}
    //       </div>

    //       <div className="gap-2 mb-10 mt-10 ml-20">
    //         <MiniChart
    //           colorTheme="dark"
    //           width={300}
    //           height={176}
    //           symbol="BTCUSD"
    //           onClick={() => {
    //             setShowSymbolInfo("BTCUSD");
    //           }}
    //           largeChartUrl={`http://localhost:3000/prediction?tvwidgetsymbol=${showSymbolInfo}`}
    //         />

    //         <MiniChart
    //           colorTheme="dark"
    //           width={300}
    //           height={176}
    //           symbol="ETHUSD"
    //           onClick={() => {
    //             setShowSymbolInfo("ETHUSD");
    //           }}
    //           largeChartUrl={`http://localhost:3000/prediction?tvwidgetsymbol=${showSymbolInfo}`}
    //         />
    //         <MiniChart
    //           colorTheme="dark"
    //           width={300}
    //           height={176}
    //           symbol="DOGEUSD"
    //           onClick={() => {
    //             setShowSymbolInfo("DOGEUSD");
    //           }}
    //           largeChartUrl={`http://localhost:3000/prediction?tvwidgetsymbol=${showSymbolInfo}`}
    //         />
    //         <MiniChart
    //           colorTheme="dark"
    //           width={300}
    //           height={176}
    //           symbol="BTCUSD"
    //           onClick={() => {
    //             setShowSymbolInfo("BTCUSD");
    //           }}
    //           largeChartUrl={`http://localhost:3000/prediction?tvwidgetsymbol=${showSymbolInfo}`}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </PageLayout>
    // <PageLayout activeMenu={"Prediction"}>
    //   <div className="flex items-center">
    //     <div className="flex justify-center gap-20 mb-10 w-full h-full">
    //       <div className="bg-blue-500 hover:bg-blue-700 text-white mr-10 font-bold rounded">
    //         {symbolData.symbol && (
    //           <SymbolInfo
    //             colorTheme="dark"
    //             width={628}
    //             height={2000}
    //             symbol={symbolData.symbol}
    //           />
    //         )}
    //       </div>

    //       <div className="mb-2 mt-2">
    //         <div className="flex flex-row gap-20 mb-10">
    //           <p className="text-sm font-bold">Related Coins</p>
    //         </div>
    //         <MiniChart
    //           colorTheme="dark"
    //           width={300}
    //           height={176}
    //           symbol="BTCUSD"
    //           onClick={() =>
    //             handleMiniChartClick(
    //               "BTCUSD",
    //               "http://localhost:3000/prediction?tvwidgetsymbol=BTCUSD"
    //             )
    //           }
    //           largeChartUrl={symbolData.largeChartUrl}
    //         />

    //         <MiniChart
    //           colorTheme="dark"
    //           width={300}
    //           height={176}
    //           symbol="ETHUSD"
    //           onClick={() =>
    //             handleMiniChartClick(
    //               "ETHUSD",
    //               "http://localhost:3000/prediction?tvwidgetsymbol=ETHUSD"
    //             )
    //           }
    //           largeChartUrl={symbolData.largeChartUrl}
    //         />
    //         <MiniChart
    //           colorTheme="dark"
    //           width={300}
    //           height={176}
    //           symbol="DOGEUSD"
    //           onClick={() =>
    //             handleMiniChartClick(
    //               "DOGEUSD",
    //               "http://localhost:3000/prediction?tvwidgetsymbol=DOGEUSD"
    //             )
    //           }
    //           largeChartUrl={symbolData.largeChartUrl}
    //         />
    //         <MiniChart
    //           colorTheme="dark"
    //           width={300}
    //           height={176}
    //           symbol="BTCUSD"
    //           onClick={() =>
    //             handleMiniChartClick(
    //               "BTCUSD",
    //               "http://localhost:3000/prediction?tvwidgetsymbol=BTCUSD"
    //             )
    //           }
    //           largeChartUrl={symbolData.largeChartUrl}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </PageLayout>
    <PageLayout activeMenu={"Prediction"}>
      <div className="flex items-center">
        <div className="flex justify-center gap-20 mb-10 w-full h-full">
          <div className="bg-blue-500 hover:bg-blue-700 text-white mr-10 font-bold rounded">
            {symbolData.symbol && (
              <SymbolInfo
                colorTheme="dark"
                width={628}
                height={2000}
                symbol={symbolData.symbol}
              />
            )}
          </div>

          <div className="mb-2 mt-2">
            <div className="flex flex-row gap-20 mb-10">
              <p className="text-sm font-bold">Related Coins</p>
            </div>

            <MiniChart
              colorTheme="dark"
              width={300}
              height={176}
              symbol="BTCUSD"
              onClick={() => handleMiniChartClick("BTCUSD")}
            />

            {/* <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleMiniChartClick("ETHUSD")}
            >
              Change Symbol
            </button> */}

            <MiniChart
              colorTheme="dark"
              width={300}
              height={176}
              symbol="ETHUSD"
              onClick={() => handleMiniChartClick("ETHUSD")}
            />

            <MiniChart
              colorTheme="dark"
              width={300}
              height={176}
              symbol="DOGEUSD"
              onClick={() => handleMiniChartClick("DOGEUSD")}
            />
            <MiniChart
              colorTheme="dark"
              width={300}
              height={176}
              symbol="BTCUSD"
              onClick={() => handleMiniChartClick("BTCUSD")}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Prediction;
