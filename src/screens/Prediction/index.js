import React, { useState } from "react";
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
import steem_logo from "../../assets/svg/steem_logo.svg";
import UBQ_logo from "../../assets/svg/UBQ.svg";
import tbx_logo from "../../assets/svg/tbx.svg";
import divider from "../../assets/svg/Divider.svg";
import upGreenIcon from "../../assets/svg/upGreen.svg";
import downRedIcon from "../../assets/svg/downRed.svg";


const Prediction = () => {
  const [symbolData, setSymbolData] = useState({
    symbol: "BTCUSD",
  });

  const handleMiniChartClick = (symbol) => {
    setSymbolData({ symbol });
  };

  return (
    <PageLayout activeMenu={"Prediction"}>
      <div className="flex items-center mb-10">
        <div className="flex justify-center gap-20 mb-20 mt-10 w-full h-[1120px]">
          <div className="bg-[#242731] flex flex-col gap-8 text-white mr-10 font-bold rounded-2xl">
            <div className="mb-20">
              {/* BTC main part */}
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
                      <img src={upload_logo} alt="SVG" className="h-4 w-4" />
                      <h4 className="font-bold text-sm">Share</h4>
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                  <h1 className="text-5xl text-[#ffffff] font-semibold ml-5">
                    19,761.52 USD
                  </h1>
                   <h6 className="text-sm font-medium text-[#4FBF67]">+0.92%</h6>
                   </div>
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
                      <img src={upload_logo} alt="SVG" className="h-4 w-4" />
                      <h4 className="font-bold text-sm">Share</h4>
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                  <h1 className="text-5xl text-[#ffffff] font-semibold ml-5">
                    5,761.52 USD
                  </h1>
                  <h6 className="text-sm font-medium text-[#4FBF67]">+0.69%</h6>
                  </div>
                </div>
              )}
              {/* STE main part */}
              {symbolData.symbol === "STE" && (
                <div className="flex flex-col">
                <div className="flex items-center gap-20 m-5">
                  <div className="flex items-center gap-2">
                    <img src={steem_logo} alt="SVG" className="h-14 w-14" />
                    <div className="flex flex-col">
                      <h4 className="text-2xl font-medium">Steem</h4>
                      <h4 className="text-lg text-[#808191] font-medium">
                        STE
                      </h4>
                    </div>
                  </div>
                  <img src={two_lines} alt="SVG" className="h-5 w-5" />
                  <button className="flex items-center gap-2 justify-center flex-row w-28 h-12 border border-solid border-[#808191] rounded-xl">
                    <img src={upload_logo} alt="SVG" className="h-4 w-4" />
                    <h4 className="font-bold text-sm">Share</h4>
                  </button>
                </div>
                <div className="flex items-center gap-3">
                <h1 className="text-5xl text-[#ffffff] font-semibold ml-5">
                    2,342.52 USD
                  </h1>
                  <h6 className="text-sm font-medium text-[#4FBF67]">+0.63%</h6>
                  </div>
                </div>
              )}
              {/* Ubiq main part */}
              {symbolData.symbol === "UBQ" && (
                <div className="flex flex-col">
                <div className="flex items-center gap-20 m-5">
                  <div className="flex items-center gap-2">
                    <img src={UBQ_logo} alt="SVG" className="h-14 w-14" />
                    <div className="flex flex-col">
                      <h4 className="text-2xl font-medium">Ubiq</h4>
                      <h4 className="text-lg text-[#808191] font-medium">
                        UBQ
                      </h4>
                    </div>
                  </div>
                  <img src={two_lines} alt="SVG" className="h-5 w-5" />
                  <button className="flex items-center gap-2 justify-center flex-row w-28 h-12 border border-solid border-[#808191] rounded-xl">
                    <img src={upload_logo} alt="SVG" className="h-4 w-4" />
                    <h4 className="font-bold text-sm">Share</h4>
                  </button>
                </div>
                <div className="flex items-center gap-3">
                <h1 className="text-5xl text-[#ffffff] font-semibold ml-5">
                    5,461.52 USD
                  </h1>
                  <h6 className="text-sm font-medium text-[#4FBF67]">+0.22%</h6>
                  </div>
                </div>
              )}
              {/* TBX main part */}
              {symbolData.symbol === "TBX" && (
                <div className="flex flex-col">
                <div className="flex items-center gap-20 m-5">
                  <div className="flex items-center gap-2">
                    <img src={tbx_logo} alt="SVG" className="h-14 w-14" />
                    <div className="flex flex-col">
                      <h4 className="text-2xl font-medium">Tokenbox</h4>
                      <h4 className="text-lg text-[#808191] font-medium">
                        TBX
                      </h4>
                    </div>
                  </div>
                  <img src={two_lines} alt="SVG" className="h-5 w-5" />
                  <button className="flex items-center gap-2 justify-center flex-row w-28 h-12 border border-solid border-[#808191] rounded-xl">
                    <img src={upload_logo} alt="SVG" className="h-4 w-4" />
                    <h4 className="font-bold text-sm">Share</h4>
                  </button>
                </div>
                <div className="flex items-center gap-3">
                <h1 className="text-5xl text-[#ffffff] font-semibold ml-5">
                    3,761.52 USD
                  </h1>
                  <h6 className="text-sm font-medium text-[#4FBF67]">+0.54%</h6>
                  </div>
                </div>
              )}
            </div>

            {/* ============ values section ============= */}
            {/* BTC values */}
            <div className="mt-60">
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
                            329,553,878,671 USD
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
                            49,097,123,995 USD
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
                            18,554,987 BTC
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
                            18,554,381 BTC
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
                            329,553,132,671 USD
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
                            49,097,908,995 USD
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
                            18,554,786 BTC
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
                            18,554,381 BTC
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STE values */}
              {symbolData.symbol === "STE" && (
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
                            329,553,243,671 USD
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
                            49,097,756,995 USD
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
                            18,554,786 BTC
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
                            18,554,381 BTC
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* UBQ values */}
              {symbolData.symbol === "UBQ" && (
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
                            329,553,663,671 USD
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
                            49,097,949,995 USD
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
                            18,554,381 BTC
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
                            18,554,381 BTC
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TBX values */}
              {symbolData.symbol === "TBX" && (
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
                            329,553,663,671 USD
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
                            49,097,949,995 USD
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
                            18,554,381 BTC
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
                            18,554,381 BTC
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
              {symbolData.symbol === "STE" && (
                <div className="flex flex-col gap-5 m-5">
                  <h6 className="text-lg font-medium">About Steem</h6>
                  <p className="text-left text-sm font-normal w-[282px] text-[#808191]">
                    The world’s first cryptocurrency, Steem is stored and
                    exchanged securely on the internet through a digital ledger
                    known as a blockchain. Bitcoins are divisible into smaller
                    units known as satoshis — each satoshi is worth 0.00000001
                    bitcoin.
                  </p>
                </div>
              )}
              {symbolData.symbol === "UBQ" && (
                <div className="flex flex-col gap-5 m-5">
                  <h6 className="text-lg font-medium">About Ubiq</h6>
                  <p className="text-left text-sm font-normal w-[282px] text-[#808191]">
                    The world’s first cryptocurrency, Ubiq is stored and
                    exchanged securely on the internet through a digital ledger
                    known as a blockchain. Bitcoins are divisible into smaller
                    units known as satoshis — each satoshi is worth 0.00000001
                    bitcoin.
                  </p>
                </div>
              )}
              {symbolData.symbol === "TBX" && (
                <div className="flex flex-col gap-5 m-5">
                  <h6 className="text-lg font-medium">About Tokenbox</h6>
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
                    <h6 className="text-xs font-medium text-[#808191]">BTC</h6>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  {/* <h6 className="text-sm font-semibold text-[#4FBF67]">2.5%</h6> */}
                  <img src={upGreenIcon} alt="SVG" className="h-6 w-16" />
                  <h6 className="text-base font-semibold">18,245.4 USD</h6>
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
                    <h6 className="text-xs font-medium text-[#808191]">ETH</h6>
                  </div>
                </div>
                <div className="flex flex-col items-end ">
                  {/* <h6 className="text-sm font-semibold text-[#FF7A68]">
                    2.05%
                  </h6> */}
                  <img src={downRedIcon} alt="SVG" className="h-6 w-16" />
                  <h6 className="text-base font-semibold">0.56687654</h6>
                </div>
              </div>
            </button>

            <button
              className={`bg-[#242731] rounded-2xl w-[299px] h-[176px] ${
                symbolData.symbol === "STE"
                  ? "border border-solid border-[#355DFF]"
                  : ""
              }`}
              onClick={() => handleMiniChartClick("STE")}
            >
              <div className="flex gap-12 mb-40 flex-row m-3 ">
                <div className="flex gap-2 ">
                  <img src={steem_logo} alt="SVG" className="h-12 w-12" />
                  <div className="flex flex-col items-start">
                    <h6 className="text-lg font-medium">Steem</h6>
                    <h6 className="text-xs font-medium text-[#808191]">STE</h6>
                  </div>
                </div>
                <div className="flex flex-col items-end ">
                  {/* <h6 className="text-sm font-semibold text-[#4FBF67]">2.5%</h6> */}
                  <img src={upGreenIcon} alt="SVG" className="h-6 w-16" />
                  <h6 className="text-base font-semibold">18,245.4 USD</h6>
                </div>
              </div>
            </button>

            <button
              className={`bg-[#242731] rounded-2xl w-[299px] h-[176px] ${
                symbolData.symbol === "UBQ"
                  ? "border border-solid border-[#355DFF]"
                  : ""
              }`}
              onClick={() => handleMiniChartClick("UBQ")}
            >
              <div className="flex mb-40 gap-20 flex-row m-3 ">
                <div className="flex gap-2">
                  <img src={UBQ_logo} alt="SVG" className="h-12 w-12" />
                  <div className="flex flex-col items-start">
                    <h6 className="text-lg font-medium ">Ubiq</h6>
                    <h6 className="text-xs font-medium text-[#808191]">UBQ</h6>
                  </div>
                </div>
                <div className="flex flex-col items-end  ">
                  {/* <h6 className="text-sm font-semibold text-[#FF7A68]">2.5%</h6> */}
                  <img src={downRedIcon} alt="SVG" className="h-6 w-16" />
                  <h6 className="text-base font-semibold">18,245 USD</h6>
                </div>
              </div>
            </button>

            <button
              className={`bg-[#242731] rounded-2xl w-[299px] h-[176px] ${
                symbolData.symbol === "TBX"
                  ? "border border-solid border-[#355DFF]"
                  : ""
              }`}
              onClick={() => handleMiniChartClick("TBX")}
            >
              <div className="flex mb-40 gap-10 flex-row m-3">
                <div className="flex gap-2 ">
                  <img src={tbx_logo} alt="SVG" className="h-12 w-12" />
                  <div className="flex flex-col items-start ">
                    <h6 className="text-lg font-medium ">Tokenbox</h6>
                    <h6 className="text-xs font-medium text-[#808191]">TBX</h6>
                  </div>
                </div>
                <div className="flex flex-col items-end ">
                  {/* <h6 className="text-sm font-semibold text-[#4FBF67]">2.5%</h6> */}
                  <img src={downRedIcon} alt="SVG" className="h-6 w-16" />
                  <h6 className="text-base font-semibold">18,245 USD</h6>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Prediction;
