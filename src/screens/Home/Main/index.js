import React, { useEffect } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Main.module.sass";
import ScrollButton from "../../../components/ScrollButton";
import Cards from "./Cards";
import { Helmet } from 'react-helmet';

const Main = ({ scrollToRef }) => {

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
    script1.async = true;
    script1.innerHTML = JSON.stringify({
      "symbol": "BINANCE:BTCUSDT",
      "width": 300,
      "isTransparent": false,
      "colorTheme": "light",
      "locale": "en"
    });
    document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
    script2.async = true;
    script2.innerHTML = JSON.stringify({
      "symbol": "BINANCE:XRPUSDT",
      "width": 300,
      "isTransparent": false,
      "colorTheme": "light",
      "locale": "en"
    });
    document.getElementsByClassName('tradingview-widget-container__widget')[1].appendChild(script2);

    const script3 = document.createElement('script');
    script3.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
    script3.async = true;
    script3.innerHTML = JSON.stringify({
      "symbol": "KUCOIN:SOLUSDT",
      "width": 300,
      "isTransparent": false,
      "colorTheme": "light",
      "locale": "en"
    });
    document.getElementsByClassName('tradingview-widget-container__widget')[2].appendChild(script3);

    const script4 = document.createElement('script');
    script4.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
    script4.async = true;
    script4.innerHTML = JSON.stringify({
      "symbol": "BINANCE:LINKUSDT",
      "width": 300,
      "isTransparent": false,
      "colorTheme": "light",
      "locale": "en"
    });
    document.getElementsByClassName('tradingview-widget-container__widget')[3].appendChild(script4);

    return () => {
      document.getElementsByClassName('tradingview-widget-container__widget')[0].removeChild(script1);
      document.getElementsByClassName('tradingview-widget-container__widget')[1].removeChild(script2);
      document.getElementsByClassName('tradingview-widget-container__widget')[2].removeChild(script3);
      document.getElementsByClassName('tradingview-widget-container__widget')[3].removeChild(script4);
    };
  }, []);

  return (
    <div className={cn("section", styles.main)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <h1 className={cn("h1", styles.title)}>
            Buy & sell <br></br>crypto in minutes
          </h1>
          <div className={styles.text}>
            Trade Bitcoin, Ethereum, USDT, and the top altcoins on the legendary
            crypto asset exchange.
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



        <div style={{display:'flex', justifyContent:'center',marginBottom:0}}>


        

        <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          {/* <span className="blue-text">Track all markets on TradingView</span> */}
        </a>
      </div>
    </div>

    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          {/* <span className="blue-text">Track all markets on TradingView</span> */}
        </a>
      </div>
    </div>


    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          {/* <span className="blue-text">Track all markets on TradingView</span> */}
        </a>
      </div>
    </div>

    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          {/* <span className="blue-text">Track all markets on TradingView</span> */}
        </a>
      </div>
    </div>

    </div>


    

    

        {/* <Cards className={styles.cards} /> */}
      </div>
    </div>
  );
};

export default Main;
