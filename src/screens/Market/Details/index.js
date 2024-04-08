import React from "react";
import cn from "classnames";
import styles from "./Details.module.sass";
import Panel from "./Panel";
import Trade from "./Trade";
import { MiniChart } from "react-ts-tradingview-widgets";

const Details = () => {
  return (
    <div className={cn("section", styles.details)}>
      <div className={cn("container", styles.container)}>
        <div className="flex gap-5 justify-between items-center mb-20">
          <div>
            <MiniChart colorTheme="dark" symbol="BTCUSDT" autosize />
          </div>
          <div>
            <MiniChart colorTheme="dark" symbol="ETHUSDT" autosize />
          </div>
          <div>
            <MiniChart colorTheme="dark" symbol="SOLUSDT" autosize />
          </div>
          <div>
            <MiniChart colorTheme="dark" symbol="XRPUSDT" autosize />
          </div>
        </div>
        {/* <Panel /> */}
        <Trade />
      </div>
    </div>
  );
};

export default Details;
