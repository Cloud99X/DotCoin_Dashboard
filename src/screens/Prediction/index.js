import React, { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import BTC_logo from "../../assets/svg/BTC.svg";
import two_lines from "../../assets/svg/dark.svg";
import upload_logo from "../../assets/svg/share.svg";
import three_dots from "../../assets/svg/24.svg";
import ghost_circle_icon from "../../assets/svg/ghost circle icon.svg";
import info_logo from "../../assets/svg/c-info-e.svg";
import ghost_circle_icon2 from "../../assets/svg/ghost circle icon2.svg";
import ghost_circle_icon3 from "../../assets/svg/ghost circle icon3.svg";
import ghost_circle_icon4 from "../../assets/svg/ghost circle icon4.svg";
import E_logo from "../../assets/svg/IconE.svg";
import solana_logo from "../../assets/svg/solana-sol-logo.svg";
import UBQ_logo from "../../assets/svg/XRP.svg";
import tbx_logo from "../../assets/svg/dogecoin.svg";
import divider from "../../assets/svg/Divider.svg";
import upGreenIcon from "../../assets/svg/upGreenIcon.svg";
import downRedIcon from "../../assets/svg/downRedIcon.svg";
import axios from "axios";

const Prediction = () => {
  const [symbolData, setSymbolData] = useState({
    symbol: "BTCUSD",
  });

  const [cryptoData, setCryptoData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  //
  const handleMiniChartClick = (symbol) => {
    setSymbolData({ symbol });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/get-crypto-data`
        );
        console.log(response.data);
        console.log(response.data.data);
        setCryptoData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <PageLayout activeMenu={"Prediction"}>
      <div className="flex items-center mb-10">
        <div className="flex justify-center gap-20 mb-20 mt-10 w-full h-[1120px]">
          <div className="bg-[#242731] flex flex-col gap-8 text-white mr-10 font-bold rounded-2xl">
            <div className="mb-20">
              {/* BTC main part */}
              {cryptoData && (
                <>
                  {symbolData.symbol === "BTCUSD" && (
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center gap-20 m-5">
                        <div className="flex items-center gap-2">
                          <img src={BTC_logo} alt="SVG" className="h-14 w-14" />
                          <div className="flex flex-col">
                            <h4 className="text-2xl font-medium">Bitcoin</h4>
                            <h4 className="text-lg text-[#808191] font-medium">
                              BTC
                            </h4>
                          </div>
                        </div>
                        <img src={two_lines} alt="SVG" className="h-5 w-5" />
                        <button className="flex items-center gap-2 justify-center flex-row w-28 h-12 border border-solid border-[#808191] rounded-xl">
                          <img
                            src={upload_logo}
                            alt="SVG"
                            className="h-4 w-4"
                          />
                          <h4 className="font-bold text-sm">Share</h4>
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <h1 className="text-5xl text-[#ffffff] font-semibold ml-5">
                          {Number(cryptoData.BTC[0].quote.USD.price)
                            .toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                            .replace("$", "")}{" "}
                          USD
                        </h1>
                        <h6
                          className={`text-sm font-medium ${
                            cryptoData.BTC[0].quote.USD.percent_change_24h >= 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {cryptoData.BTC[0].quote.USD.percent_change_24h >= 0
                            ? "+"
                            : "-"}
                          {Math.abs(
                            cryptoData.BTC[0].quote.USD.percent_change_24h
                          ).toFixed(2)}
                          %
                        </h6>
                      </div>

                      {/* {cryptoData.BTC &&
                    cryptoData.BTC[0] &&
                    cryptoData.BTC[0].quote.USD.price &&
                    cryptoData.BTC[0].quote.USD.percent_change_24h !==
                      undefined && (
                      <div className="flex items-center gap-3">
                        <h1 className="text-5xl text-[#ffffff] font-semibold ml-5">
                          {Number(cryptoData.BTC[0].quote.USD.price)
                            .toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                            .replace("$", "")}{" "}
                          USD
                        </h1>
                        <h6
                          className={`text-sm font-medium ${
                            cryptoData.BTC[0].quote.USD.percent_change_24h >= 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {cryptoData.BTC[0].quote.USD.percent_change_24h >= 0
                            ? "+"
                            : "-"}
                          {Math.abs(
                            cryptoData.BTC[0].quote.USD.percent_change_24h
                          ).toFixed(2)}
                          %
                        </h6>
                      </div>
                    )} */}
                    </div>
                  )}
                  {/* ETH main part */}
                  {symbolData.symbol === "ETHUSD" && (
                    <div className="flex flex-col">
                      <div className="flex items-center gap-20 m-5">
                        <div className="flex items-center gap-2">
                          <img src={E_logo} alt="SVG" className="h-14 w-14" />
                          <div className="flex flex-col">
                            <h4 className="text-2xl font-medium">Ethereum</h4>
                            <h4 className="text-lg text-[#808191] font-medium">
                              ETH
                            </h4>
                          </div>
                        </div>
                        <img src={two_lines} alt="SVG" className="h-5 w-5" />
                        <button className="flex items-center gap-2 justify-center flex-row w-28 h-12 border border-solid border-[#808191] rounded-xl">
                          <img
                            src={upload_logo}
                            alt="SVG"
                            className="h-4 w-4"
                          />
                          <h4 className="font-bold text-sm">Share</h4>
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <h1 className="text-5xl text-[#ffffff] font-semibold ml-5">
                          {Number(cryptoData.ETH[0].quote.USD.price)
                            .toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                            .replace("$", "")}{" "}
                          USD
                        </h1>
                        <h6
                          className={`text-sm font-medium ${
                            cryptoData.ETH[0].quote.USD.percent_change_24h >= 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {cryptoData.ETH[0].quote.USD.percent_change_24h >= 0
                            ? "+"
                            : "-"}
                          {Math.abs(
                            cryptoData.ETH[0].quote.USD.percent_change_24h
                          ).toFixed(2)}
                          %
                        </h6>
                      </div>
                    </div>
                  )}
                  {/* Solana main part */}
                  {symbolData.symbol === "SOL" && (
                    <div className="flex flex-col">
                      <div className="flex items-center gap-20 m-5">
                        <div className="flex items-center gap-2">
                          <img
                            src={solana_logo}
                            alt="SVG"
                            className="h-14 w-14"
                          />
                          <div className="flex flex-col">
                            <h4 className="text-2xl font-medium">Solana</h4>
                            <h4 className="text-lg text-[#808191] font-medium">
                              ETH
                            </h4>
                          </div>
                        </div>
                        <img src={two_lines} alt="SVG" className="h-5 w-5" />
                        <button className="flex items-center gap-2 justify-center flex-row w-28 h-12 border border-solid border-[#808191] rounded-xl">
                          <img
                            src={upload_logo}
                            alt="SVG"
                            className="h-4 w-4"
                          />
                          <h4 className="font-bold text-sm">Share</h4>
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <h1 className="text-5xl text-[#ffffff] font-semibold ml-5">
                          {Number(cryptoData.SOL[0].quote.USD.price)
                            .toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                            .replace("$", "")}{" "}
                          USD
                        </h1>
                        <h6
                          className={`text-sm font-medium ${
                            cryptoData.SOL[0].quote.USD.percent_change_24h >= 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {cryptoData.SOL[0].quote.USD.percent_change_24h >= 0
                            ? "+"
                            : "-"}
                          {Math.abs(
                            cryptoData.SOL[0].quote.USD.percent_change_24h
                          ).toFixed(2)}
                          %
                        </h6>
                      </div>
                    </div>
                  )}
                  {/* Ubiq main part */}
                  {symbolData.symbol === "XRP" && (
                    <div className="flex flex-col">
                      <div className="flex items-center gap-20 m-5">
                        <div className="flex items-center gap-2">
                          <img src={UBQ_logo} alt="SVG" className="h-14 w-14" />
                          <div className="flex flex-col">
                            <h4 className="text-2xl font-medium">XRP</h4>
                            <h4 className="text-lg text-[#808191] font-medium">
                              ETH
                            </h4>
                          </div>
                        </div>
                        <img src={two_lines} alt="SVG" className="h-5 w-5" />
                        <button className="flex items-center gap-2 justify-center flex-row w-28 h-12 border border-solid border-[#808191] rounded-xl">
                          <img
                            src={upload_logo}
                            alt="SVG"
                            className="h-4 w-4"
                          />
                          <h4 className="font-bold text-sm">Share</h4>
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <h1 className="text-5xl text-[#ffffff] font-semibold ml-5">
                          {Number(cryptoData.XRP[0].quote.USD.price)
                            .toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                            .replace("$", "")}{" "}
                          USD
                        </h1>
                        <h6
                          className={`text-sm font-medium ${
                            cryptoData.XRP[0].quote.USD.percent_change_24h >= 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {cryptoData.XRP[0].quote.USD.percent_change_24h >= 0
                            ? "+"
                            : "-"}
                          {Math.abs(
                            cryptoData.XRP[0].quote.USD.percent_change_24h
                          ).toFixed(2)}
                          %
                        </h6>
                      </div>
                    </div>
                  )}
                  {/* TBX main part */}
                  {symbolData.symbol === "DOGE" && (
                    <div className="flex flex-col">
                      <div className="flex items-center gap-20 m-5">
                        <div className="flex items-center gap-2">
                          <img src={tbx_logo} alt="SVG" className="h-14 w-14" />
                          <div className="flex flex-col">
                            <h4 className="text-2xl font-medium">Dogecoin</h4>
                            <h4 className="text-lg text-[#808191] font-medium">
                              ETH
                            </h4>
                          </div>
                        </div>
                        <img src={two_lines} alt="SVG" className="h-5 w-5" />
                        <button className="flex items-center gap-2 justify-center flex-row w-28 h-12 border border-solid border-[#808191] rounded-xl">
                          <img
                            src={upload_logo}
                            alt="SVG"
                            className="h-4 w-4"
                          />
                          <h4 className="font-bold text-sm">Share</h4>
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <h1 className="text-5xl text-[#ffffff] font-semibold ml-5">
                          {Number(cryptoData.DOGE[0].quote.USD.price)
                            .toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                            .replace("$", "")}{" "}
                          USD
                        </h1>
                        <h6
                          className={`text-sm font-medium ${
                            cryptoData.DOGE[0].quote.USD.percent_change_24h >= 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {cryptoData.DOGE[0].quote.USD.percent_change_24h >= 0
                            ? "+"
                            : "-"}
                          {Math.abs(
                            cryptoData.DOGE[0].quote.USD.percent_change_24h
                          ).toFixed(2)}
                          %
                        </h6>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* ============ values section ============= */}
            {/* BTC values */}
            <div className="mt-60">
              {cryptoData && (
                <>
                  {symbolData.symbol === "BTCUSD" && (
                    <div className="flex flex-col item-center border-t border-b border-solid border-[#808191]">
                      <div className="flex flex-row  border-b border-solid border-[#808191]">
                        <div className="flex items-center justify-center w-80 h-28 ">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Market Cap
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.BTC[0].quote.USD.market_cap} USD
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-center w-80 h-28 border-l border-solid border-[#808191]">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon2}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Volume (24h)
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.BTC[0].quote.USD.volume_24h} USD
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="flex items-center justify-center w-80 h-28 ">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon3}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Circulating Supply
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.BTC[0].circulating_supply}
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-center w-80 h-28 border-l border-solid border-[#808191]">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon4}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Total Supply
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.BTC[0].total_supply}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ETH values */}
                  {symbolData.symbol === "ETHUSD" && (
                    <div className="flex flex-col item-center border-t border-b border-solid border-[#808191]">
                      <div className="flex flex-row  border-b border-solid border-[#808191]">
                        <div className="flex items-center justify-center w-80 h-28 ">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Market Cap
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.ETH[0].quote.USD.market_cap} USD
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-center w-80 h-28 border-l border-solid border-[#808191]">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon2}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Volume (24h)
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.ETH[0].quote.USD.volume_24h} USD
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="flex items-center justify-center w-80 h-28 ">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon3}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Circulating Supply
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.ETH[0].circulating_supply}
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-center w-80 h-28 border-l border-solid border-[#808191]">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon4}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Total Supply
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.ETH[0].total_supply}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Solana values */}
                  {symbolData.symbol === "SOL" && (
                    <div className="flex flex-col item-center border-t border-b border-solid border-[#808191]">
                      <div className="flex flex-row  border-b border-solid border-[#808191]">
                        <div className="flex items-center justify-center w-80 h-28 ">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Market Cap
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.SOL[0].quote.USD.market_cap} USD
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-center w-80 h-28 border-l border-solid border-[#808191]">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon2}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Volume (24h)
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.SOL[0].quote.USD.volume_24h} USD
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="flex items-center justify-center w-80 h-28 ">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon3}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Circulating Supply
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.SOL[0].circulating_supply}
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-center w-80 h-28 border-l border-solid border-[#808191]">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon4}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Total Supply
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.SOL[0].total_supply}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* xrp values */}
                  {symbolData.symbol === "XRP" && (
                    <div className="flex flex-col item-center border-t border-b border-solid border-[#808191]">
                      <div className="flex flex-row  border-b border-solid border-[#808191]">
                        <div className="flex items-center justify-center w-80 h-28 ">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Market Cap
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.XRP[0].quote.USD.market_cap} USD
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-center w-80 h-28 border-l border-solid border-[#808191]">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon2}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Volume (24h)
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.XRP[0].quote.USD.volume_24h} USD
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="flex items-center justify-center w-80 h-28 ">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon3}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Circulating Supply
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.XRP[0].circulating_supply}
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-center w-80 h-28 border-l border-solid border-[#808191]">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon4}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Total Supply
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.XRP[0].total_supply}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* dogecoin values */}
                  {symbolData.symbol === "DOGE" && (
                    <div className="flex flex-col item-center border-t border-b border-solid border-[#808191]">
                      <div className="flex flex-row  border-b border-solid border-[#808191]">
                        <div className="flex items-center justify-center w-80 h-28 ">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Market Cap
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.DOGE[0].quote.USD.market_cap} USD
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-center w-80 h-28 border-l border-solid border-[#808191]">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon2}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Volume (24h)
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.DOGE[0].quote.USD.volume_24h} USD
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="flex items-center justify-center w-80 h-28 ">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon3}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Circulating Supply
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.DOGE[0].circulating_supply}
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-center w-80 h-28 border-l border-solid border-[#808191]">
                          <div className="flex flex-row gap-5 w-[250px]">
                            <img
                              src={ghost_circle_icon4}
                              alt="SVG"
                              className="h-10 w-10"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 flex-row">
                                <h6 className="text-xs font-medium text-[#808191]">
                                  Total Supply
                                </h6>
                                <img
                                  src={info_logo}
                                  alt="SVG"
                                  className="h-3 w-3"
                                />
                              </div>

                              <h6 className="text-lg font-medium">
                                {cryptoData.DOGE[0].total_supply}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* ==========  about section  ============= */}

            <div className="">
              {symbolData.symbol === "BTCUSD" && (
                <div className="flex flex-col gap-5 m-5">
                  <h6 className="text-lg font-medium">About Bitcoin</h6>
                  <p className="text-left text-sm font-normal w-[282px] text-[#808191]">
                    The world’s first cryptocurrency, Bitcoin is stored and
                    exchanged securely on the internet through a digital ledger
                    known as a blockchain. Bitcoins are divisible into smaller
                    units known as satoshis — each satoshi is worth 0.00000001
                    bitcoin.
                  </p>
                </div>
              )}
              {symbolData.symbol === "ETHUSD" && (
                <div className="flex flex-col gap-5 m-5">
                  <h6 className="text-lg font-medium">About Ethereum</h6>
                  <p className="text-left text-sm font-normal w-[282px] text-[#808191]">
                    The world’s first cryptocurrency, Bitcoin is stored and
                    exchanged securely on the internet through a digital ledger
                    known as a blockchain. Bitcoins are divisible into smaller
                    units known as satoshis — each satoshi is worth 0.00000001
                    bitcoin.
                  </p>
                </div>
              )}
              {symbolData.symbol === "SOL" && (
                <div className="flex flex-col gap-5 m-5">
                  <h6 className="text-lg font-medium">About Solana</h6>
                  <p className="text-left text-sm font-normal w-[282px] text-[#808191]">
                    The world’s first cryptocurrency, Steem is stored and
                    exchanged securely on the internet through a digital ledger
                    known as a blockchain. Bitcoins are divisible into smaller
                    units known as satoshis — each satoshi is worth 0.00000001
                    bitcoin.
                  </p>
                </div>
              )}
              {symbolData.symbol === "XRP" && (
                <div className="flex flex-col gap-5 m-5">
                  <h6 className="text-lg font-medium">About XRP</h6>
                  <p className="text-left text-sm font-normal w-[282px] text-[#808191]">
                    The world’s first cryptocurrency, Ubiq is stored and
                    exchanged securely on the internet through a digital ledger
                    known as a blockchain. Bitcoins are divisible into smaller
                    units known as satoshis — each satoshi is worth 0.00000001
                    bitcoin.
                  </p>
                </div>
              )}
              {symbolData.symbol === "DOGE" && (
                <div className="flex flex-col gap-5 m-5">
                  <h6 className="text-lg font-medium">About Dogecoin</h6>
                  <p className="text-left text-sm font-normal w-[282px] text-[#808191]">
                    The world’s first cryptocurrency, Tokenbox is stored and
                    exchanged securely on the internet through a digital ledger
                    known as a blockchain. Bitcoins are divisible into smaller
                    units known as satoshis — each satoshi is worth 0.00000001
                    bitcoin.
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-center">
              <button
                className="bg-[#355DFF] hover:bg-blue-700 text-white font-bold w-5/6 h-16 rounded-lg "
                onClick={() => handleMiniChartClick("ETHUSD")}
              >
                Predict
              </button>
            </div>
          </div>

          <img src={divider} alt="SVG" className="h-[1400px] w-1" />
          {/* ============= Mini card section ====================== */}
          {cryptoData && (
            <div className="flex flex-col mb-2 mt-2 gap-5">
              <div className="flex flex-row justify-between  mb-10">
                <p className="text-lg font-medium">Related Coins</p>
                <button>
                  <img src={three_dots} alt="SVG" className="h-6 w-5" />
                </button>
              </div>

              <button
                className={`bg-[#242731] rounded-2xl w-[299px] h-[176px] ${
                  symbolData.symbol === "BTCUSD"
                    ? "border border-solid border-[#355DFF]"
                    : ""
                }`}
                onClick={() => handleMiniChartClick("BTCUSD")}
              >
                <div className="flex mb-40 gap-12 flex-row m-3">
                  <div className="flex gap-2 ">
                    <img src={BTC_logo} alt="SVG" className="h-12 w-12" />
                    <div className="flex flex-col items-start ">
                      <h6 className="text-lg font-medium ">Bitcoin</h6>
                      <h6 className="text-xs font-medium text-[#808191]">
                        BTC
                      </h6>
                    </div>
                  </div>
                  {/* <div className="flex flex-col items-end"> */}
                  {/* <h6 className="text-sm font-semibold text-[#4FBF67]">2.5%</h6> */}
                  {/* <img src={upGreenIcon} alt="SVG" className="h-6 w-16" />
                    <h6 className="text-base font-semibold">18,245.4 USD</h6> */}
                  {/* </div> */}

                  <div className="flex flex-col items-end w-[150px]">
                    <h6
                      className={`text-sm font-semibold flex items-center ${
                        cryptoData.BTC[0]?.quote?.USD?.percent_change_24h >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {cryptoData.BTC[0]?.quote?.USD?.percent_change_24h >=
                      0 ? (
                        <img
                          src={upGreenIcon}
                          alt="Green Up Arrow"
                          className="h-4 w-4 mr-1"
                        />
                      ) : (
                        <img
                          src={downRedIcon}
                          alt="Red Down Arrow"
                          className="h-4 w-4 mr-1"
                        />
                      )}
                      {Math.abs(
                        cryptoData.BTC[0]?.quote?.USD?.percent_change_24h ?? 0
                      ).toFixed(2)}
                      %
                    </h6>

                    {cryptoData.BTC[0]?.quote?.USD?.price && (
                      <h6 className="text-base font-semibold">
                        {Number(cryptoData.BTC[0].quote.USD.price)
                          .toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                          .replace("$", "")}{" "}
                        USD
                      </h6>
                    )}
                  </div>
                </div>
              </button>

              <button
                className={`bg-[#242731] rounded-2xl w-[299px] h-[176px] ${
                  symbolData.symbol === "ETHUSD"
                    ? "border border-solid border-[#355DFF]"
                    : ""
                }`}
                onClick={() => handleMiniChartClick("ETHUSD")}
              >
                <div className="flex mb-40 gap-10 flex-row m-5">
                  <div className="flex gap-2 ">
                    <img src={E_logo} alt="SVG" className="h-12 w-12" />
                    <div className="flex flex-col items-start ">
                      <h6 className="text-lg font-medium ">Ethereum</h6>
                      <h6 className="text-xs font-medium text-[#808191]">
                        ETH
                      </h6>
                    </div>
                  </div>
                  {/* <div className="flex flex-col items-end ">
                    <img src={downRedIcon} alt="SVG" className="h-6 w-16" />
                    <h6 className="text-base font-semibold">0.56687654</h6>
                  </div> */}

                  <div className="flex flex-col items-end w-[150px]">
                    {/* <img src={downRedIcon} alt="SVG" className="h-6 w-16" /> */}
                    <h6
                      className={`text-sm font-semibold flex items-center ${
                        cryptoData.ETH[0]?.quote?.USD?.percent_change_24h >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {cryptoData.ETH[0]?.quote?.USD?.percent_change_24h >=
                      0 ? (
                        <img
                          src={upGreenIcon}
                          alt="Green Up Arrow"
                          className="h-4 w-4 mr-1"
                        />
                      ) : (
                        <img
                          src={downRedIcon}
                          alt="Red Down Arrow"
                          className="h-4 w-4 mr-1"
                        />
                      )}
                      {Math.abs(
                        cryptoData.ETH[0]?.quote?.USD?.percent_change_24h ?? 0
                      ).toFixed(2)}
                      %
                    </h6>

                    {cryptoData.ETH[0]?.quote?.USD?.price && (
                      <h6 className="text-base font-semibold">
                        {Number(cryptoData.ETH[0].quote.USD.price)
                          .toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                          .replace("$", "")}{" "}
                        USD
                      </h6>
                    )}
                  </div>
                </div>
              </button>

              <button
                className={`bg-[#242731] rounded-2xl w-[299px] h-[176px] ${
                  symbolData.symbol === "SOL"
                    ? "border border-solid border-[#355DFF]"
                    : ""
                }`}
                onClick={() => handleMiniChartClick("SOL")}
              >
                <div className="flex gap-12 mb-40 flex-row m-3 ">
                  <div className="flex gap-2 ">
                    <img src={solana_logo} alt="SVG" className="h-12 w-12" />
                    <div className="flex flex-col items-start">
                      <h6 className="text-lg font-medium">Solana</h6>
                      <h6 className="text-xs font-medium text-[#808191]">
                        SOL
                      </h6>
                    </div>
                  </div>
                  {/* <div className="flex flex-col items-end "> */}
                  {/* <h6 className="text-sm font-semibold text-[#4FBF67]">2.5%</h6> */}
                  {/* <img src={upGreenIcon} alt="SVG" className="h-6 w-16" />
                    <h6 className="text-base font-semibold">18,245.4 USD</h6> */}
                  {/* </div> */}

                  <div className="flex flex-col items-end w-[150px]">
                    {/* <img src={downRedIcon} alt="SVG" className="h-6 w-16" /> */}
                    <h6
                      className={`text-sm font-semibold flex items-center ${
                        cryptoData.SOL[0]?.quote?.USD?.percent_change_24h >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {cryptoData.SOL[0]?.quote?.USD?.percent_change_24h >=
                      0 ? (
                        <img
                          src={upGreenIcon}
                          alt="Green Up Arrow"
                          className="h-4 w-4 mr-1"
                        />
                      ) : (
                        <img
                          src={downRedIcon}
                          alt="Red Down Arrow"
                          className="h-4 w-4 mr-1"
                        />
                      )}
                      {Math.abs(
                        cryptoData.SOL[0]?.quote?.USD?.percent_change_24h ?? 0
                      ).toFixed(2)}
                      %
                    </h6>
                    {cryptoData.SOL[0]?.quote?.USD?.price && (
                      <h6 className="text-base font-semibold">
                        {Number(cryptoData.SOL[0].quote.USD.price)
                          .toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                          .replace("$", "")}{" "}
                        USD
                      </h6>
                    )}
                  </div>
                </div>
              </button>

              <button
                className={`bg-[#242731] rounded-2xl w-[299px] h-[176px] ${
                  symbolData.symbol === "XRP"
                    ? "border border-solid border-[#355DFF]"
                    : ""
                }`}
                onClick={() => handleMiniChartClick("XRP")}
              >
                <div className="flex mb-40 gap-20 flex-row m-3 ">
                  <div className="flex gap-2">
                    <img src={UBQ_logo} alt="SVG" className="h-12 w-12" />
                    <div className="flex flex-col items-start">
                      <h6 className="text-lg font-medium ">XRP</h6>
                      <h6 className="text-xs font-medium text-[#808191]">
                        XRP
                      </h6>
                    </div>
                  </div>
                  {/* <div className="flex flex-col items-end  "> */}
                  {/* <h6 className="text-sm font-semibold text-[#FF7A68]">2.5%</h6> */}
                  {/* <img src={downRedIcon} alt="SVG" className="h-6 w-16" />
                    <h6 className="text-base font-semibold">18,245 USD</h6> */}
                  {/* </div> */}

                  <div className="flex flex-col items-end w-[150px]">
                    {/* <img src={downRedIcon} alt="SVG" className="h-6 w-16" /> */}
                    <h6
                      className={`text-sm font-semibold flex items-center ${
                        cryptoData.XRP[0]?.quote?.USD?.percent_change_24h >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {cryptoData.XRP[0]?.quote?.USD?.percent_change_24h >=
                      0 ? (
                        <img
                          src={upGreenIcon}
                          alt="Green Up Arrow"
                          className="h-4 w-4 mr-1"
                        />
                      ) : (
                        <img
                          src={downRedIcon}
                          alt="Red Down Arrow"
                          className="h-4 w-4 mr-1"
                        />
                      )}
                      {Math.abs(
                        cryptoData.XRP[0]?.quote?.USD?.percent_change_24h ?? 0
                      ).toFixed(2)}
                      %
                    </h6>
                    {cryptoData.XRP[0]?.quote?.USD?.price && (
                      <h6 className="text-base font-semibold">
                        {Number(cryptoData.XRP[0].quote.USD.price)
                          .toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                          .replace("$", "")}{" "}
                        USD
                      </h6>
                    )}
                  </div>
                </div>
              </button>

              <button
                className={`bg-[#242731] rounded-2xl w-[299px] h-[176px] ${
                  symbolData.symbol === "DOGE"
                    ? "border border-solid border-[#355DFF]"
                    : ""
                }`}
                onClick={() => handleMiniChartClick("DOGE")}
              >
                <div className="flex mb-40 gap-10 flex-row m-3">
                  <div className="flex gap-2 ">
                    <img src={tbx_logo} alt="SVG" className="h-12 w-12" />
                    <div className="flex flex-col items-start ">
                      <h6 className="text-lg font-medium ">Dogecoin</h6>
                      <h6 className="text-xs font-medium text-[#808191]">
                        DOGE
                      </h6>
                    </div>
                  </div>
                  {/* <div className="flex flex-col items-end ">
                    <h6 className="text-sm font-semibold text-[#4FBF67]">2.5%</h6>
                    <img src={downRedIcon} alt="SVG" className="h-6 w-16" />
                    <h6 className="text-base font-semibold">18,245 USD</h6>
                  </div> */}
                  <div className="flex flex-col items-end w-[150px]">
                    {/* <img src={downRedIcon} alt="SVG" className="h-6 w-16" /> */}
                    <h6
                      className={`text-sm font-semibold flex items-center ${
                        cryptoData.DOGE[0]?.quote?.USD?.percent_change_24h >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {cryptoData.DOGE[0]?.quote?.USD?.percent_change_24h >=
                      0 ? (
                        <img
                          src={upGreenIcon}
                          alt="Green Up Arrow"
                          className="h-4 w-4 mr-1"
                        />
                      ) : (
                        <img
                          src={downRedIcon}
                          alt="Red Down Arrow"
                          className="h-4 w-4 mr-1"
                        />
                      )}
                      {Math.abs(
                        cryptoData.DOGE[0]?.quote?.USD?.percent_change_24h ?? 0
                      ).toFixed(2)}
                      %
                    </h6>
                    {cryptoData.DOGE[0]?.quote?.USD?.price && (
                      <h6 className="text-base font-semibold">
                        {Number(cryptoData.XRP[0].quote.USD.price)
                          .toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                          .replace("$", "")}{" "}
                        USD
                      </h6>
                    )}
                  </div>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Prediction;
