import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Main.module.sass";
import ScrollButton from "../../../components/ScrollButton";
import Cards from "./Cards";
import { SingleTicker } from "react-ts-tradingview-widgets";

const Main = ({ scrollToRef }) => {
  return (
    <div className={cn("section", styles.main)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <h1 className={cn("h1", styles.title)}>
            Analyze and
            <br />
            Predict in minutes
          </h1>
          <div className={styles.text}>
            Bitcoin, Ethereum, USDT, and All Top Crypto Currencies A Market
            Prediction Analysis System with Predictive AI & Trading View.
          </div>
          <Link className={cn("button", styles.button)} to="/sign-up">
            Get started now
          </Link>
          <ScrollButton
            onScroll={() =>
              scrollToRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className={styles.scroll}
          />
        </div>
        <div className={styles.bg}>
          <img
            srcSet="/images/content/cards@2x.png 2x"
            src="/images/content/cards.png"
            alt="Cards"
          />
        </div>
        {/* <Cards className={styles.cards} /> */}
        <div className="flex mb-10 justify-between items-center gap-5">
          <div>
            <SingleTicker
              colorTheme="dark"
              autosize={true}
              symbol="BTCUSD"
              largeChartUrl=""
            />
          </div>
          <div>
            <SingleTicker colorTheme="dark" autosize={true} symbol="ETHUSD" />
          </div>
          <div>
            <SingleTicker colorTheme="dark" autosize={true} symbol="SOLUSD" />
          </div>
          <div>
            <SingleTicker colorTheme="dark" autosize={true} symbol="XRPUSD" />
          </div>

          {/* <SingleTicker colorTheme="dark" autosize={true} symbol="DOGEUSD" /> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
