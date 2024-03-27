import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import Bitcoin from "../../assets/svg/Bitcoin.svg";
import Ethereum from "../../assets/svg/ethereum.svg";
import XRP from "../../assets/svg/XRP.svg";
import Dogecoin from "../../assets/svg/dogecoin.svg";
import BitcoinChart from "../../assets/svg/BitcoinChart.svg";
import EthereumChart from "../../assets/svg/ethereumChart.svg";
import XRPChart from "../../assets/svg/XRPChart.svg";
import DogecoinChart from "../../assets/svg/dogecoinChart.svg";
import Up from "../../assets/svg/up.svg";
import Down from "../../assets/svg/down.svg";
import { SingleTicker } from "react-ts-tradingview-widgets";

const Markets = () => {
  //

  const currencies = [
    {
      token: "Bitcoin",
      symbol: "BTC",
      price: "545645",
      hours24: "2.05%",
      marketCap: "5465454",
      volume: "54645465",
      logo: Bitcoin,
      chart: BitcoinChart,
      up: true,
    },
    {
      token: "Ethereum",
      symbol: "BTC",
      price: "545645",
      hours24: "2.05%",
      marketCap: "5465454",
      volume: "54645465",
      logo: Ethereum,
      chart: EthereumChart,
      up: false,
    },
    {
      token: "Solana",
      symbol: "BTC",
      price: "545645",
      hours24: "2.05%",
      marketCap: "5465454",
      volume: "54645465",
      logo: Bitcoin,
      chart: BitcoinChart,
      up: true,
    },
    {
      token: "XRP",
      symbol: "BTC",
      price: "545645",
      hours24: "2.05%",
      marketCap: "5465454",
      volume: "54645465",
      logo: XRP,
      chart: XRPChart,
      up: false,
    },
    {
      token: "Dogecoin",
      symbol: "BTC",
      price: "545645",
      hours24: "2.05%",
      marketCap: "5465454",
      volume: "54645465",
      logo: Dogecoin,
      chart: DogecoinChart,
      up: true,
    },
  ];

  return (
    <PageLayout activeMenu={"Markets"}>
      <div>
        <div className="flex gap-5 mb-10">
          <SingleTicker
            colorTheme="dark"
            autosize={true}
            symbol="BTCUSD"
            largeChartUrl=""
          />
          <SingleTicker colorTheme="dark" autosize={true} symbol="ETHUSD" />
          <SingleTicker colorTheme="dark" autosize={true} symbol="SOLUSD" />
          <SingleTicker colorTheme="dark" autosize={true} symbol="XRPUSD" />
          {/* <SingleTicker colorTheme="dark" autosize={true} symbol="DOGEUSD" /> */}
        </div>
        <div className="">
          <p className="text-2xl">
            Today's <br />
            Cryptocurrency Prices
          </p>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table className="w-full text-sm text-left">
              <thead className="text-base bg-[#1b1d25] text-[#808191]">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    TOKEN
                  </th>
                  <th scope="col" className="px-6 py-3">
                    SYMBOL
                  </th>
                  <th scope="col" className="px-6 py-3">
                    PRICE
                  </th>
                  <th scope="col" className="px-6 py-3">
                    24H
                  </th>
                  <th scope="col" className="px-6 py-3">
                    MARKET CAP
                  </th>
                  <th scope="col" className="px-6 py-3">
                    VOLUME
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {currencies.map((curr, index) => (
                  <tr className="even:bg-[#242731] border-b" key={index}>
                    <td scope="row" className="px-6 py-4 text-white">
                      <div className="flex gap-3 items-center">
                        <img src={curr.logo} width={30} />
                        <p className="font-bold">{curr.token}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">{curr.symbol}</td>
                    <td className="px-6 py-4 text-white">${curr.price}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-3 items-center">
                        <img src={curr.up ? Up : Down} width={20} />
                        <p
                          className={`font-bold ${
                            curr.up ? "text-[#4FBF67]" : "text-[#FF7A68]"
                          }`}
                        >
                          {curr.hours24}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white">${curr.marketCap}</td>
                    <td className="px-6 py-4 text-white">${curr.volume}</td>
                    <td className="px-6 py-4 text-white">
                      <img src={curr.chart} alt="" width={100} height={100} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Markets;
