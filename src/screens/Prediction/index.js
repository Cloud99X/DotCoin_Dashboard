import React, { useState } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import { SymbolInfo } from "react-ts-tradingview-widgets";
import { MiniChart } from "react-ts-tradingview-widgets";
import { CompanyProfile } from "react-ts-tradingview-widgets";

// const MiniChartWrapper = ({ symbol, onHover }) => {
//   return (
//     <div
//       onMouseEnter={() => onHover(symbol)}
//       style={{ width: '300px', height: '176px' }} // Adjust styling as needed
//     >
//       <MiniChart
//         colorTheme="dark"
//         width={300}
//         height={176}
//         symbol={symbol}
//       />
//     </div>
//   );
// };
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

  // const [symbolData, setSymbolData] = useState({
  //   symbol: "BTCUSD",
  // });

  // const handleMiniChartHover = (symbol) => {
  //   setSymbolData({ symbol });
  // };
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
      <div className="flex items-center mt-10">
        <div className="flex justify-center gap-20 mb-10 mt-10 w-full h-full">
          <div className="bg-[#1e222d] flex flex-col gap-20 text-white mr-10 font-bold rounded-lg">
            <div className="mb-20">
              {symbolData.symbol && (
                <SymbolInfo
                  colorTheme="dark"
                  width={628}
                  // height={2000}
                  isTransparent={true}
                  symbol={symbolData.symbol}
                />
              )}
            </div>
            <div className="mt-60">
              {symbolData.symbol && (
                <CompanyProfile
                  colorTheme="dark"
                  width={628}
                  height={300}
                  isTransparent={true}
                  symbol={symbolData.symbol}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col mb-2 mt-2 gap-5">
            <div className="flex flex-row gap-20 mb-10">
              <p className="text-sm font-bold">Related Coins</p>
            </div>
            <div className="bg-[#1e222d] rounded-lg w-full ">
              <MiniChart
                colorTheme="dark"
                width={300}
                height={176}
                symbol="BTCUSD"
                isTransparent={true}
                noTimeScale={true}
                onClick={() => handleMiniChartClick("BTCUSD")}
              />
            </div>

            {/* <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleMiniChartClick("ETHUSD")}
            >
              Change Symbol
            </button> */}

            <div className="bg-[#1e222d] rounded-lg w-full ">
              <MiniChart
                colorTheme="dark"
                width={300}
                height={176}
                symbol="ETHUSD"
                isTransparent={true}
                noTimeScale={true}
                onMouseEnter={() => handleMiniChartClick("ETHUSD")}
                // onHover={() => handleMiniChartClick("ETHUSD")}
              />
            </div>
            <div className="bg-[#1e222d] rounded-lg w-full ">
              <MiniChart
                colorTheme="dark"
                width={300}
                height={176}
                symbol="DOGEUSD"
                isTransparent={true}
                noTimeScale={true}
                onClick={() => handleMiniChartClick("DOGEUSD")}
              />
            </div>
            <div className="bg-[#1e222d] rounded-lg w-full ">
              <MiniChart
                colorTheme="dark"
                width={300}
                height={176}
                symbol="BTCUSD"
                isTransparent={true}
                noTimeScale={true}
                onClick={() => handleMiniChartClick("BTCUSD")}
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
    //   <PageLayout activeMenu={"Prediction"}>
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

    //         <MiniChartWrapper
    //           symbol="BTCUSD"
    //           onHover={handleMiniChartHover}
    //         />

    //         <MiniChartWrapper
    //           symbol="ETHUSD"
    //           onHover={handleMiniChartHover}
    //         />

    //         <MiniChartWrapper
    //           symbol="DOGEUSD"
    //           onHover={handleMiniChartHover}
    //         />

    //         <MiniChartWrapper
    //           symbol="BTCUSD"
    //           onHover={handleMiniChartHover}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </PageLayout>
  );
};

export default Prediction;
