import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";
import styles from "./Learn.module.sass";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Icon from "../../../components/Icon";
import Play from "../../../components/Play";

const navigation = ["All", "Bitcoin", "Blockchain", "Tutorial"];

const items = [
  {
    title: "Leveraged tokens now available",
    content: "Good things come in 3s. Get 3x Leveraged tokens now.",
    image: "/images/content/learn-pic-1.jpg",
    image2x: "/images/content/learn-pic-1@2x.jpg",
    url: "/learn-crypto-details",
  },
  {
    title: "Leveraged tokens now available",
    content: "Good things come in 3s. Get 3x Leveraged tokens now.",
    date: "Jun 1, 2021",
    image: "/images/content/learn-pic-2.jpg",
    image2x: "/images/content/learn-pic-2@2x.jpg",
    url: "/learn-crypto-details",
  },
  {
    title: "Leveraged tokens now available",
    content: "Good things come in 3s. Get 3x Leveraged tokens now.",
    date: "Jun 1, 2021",
    play: true,
    image: "/images/content/learn-pic-4.jpg",
    image2x: "/images/content/learn-pic-4@2x.jpg",
    url: "/learn-crypto-details",
  },
  {
    title: "Leveraged tokens now available",
    content: "Good things come in 3s. Get 3x Leveraged tokens now.",
    date: "Jun 1, 2021",
    image: "/images/content/learn-pic-3.jpg",
    image2x: "/images/content/learn-pic-3@2x.jpg",
    url: "/learn-crypto-details",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Learn = ({ scrollToRef }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRefs = useRef([]);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 100000,
        settings: "unslick",
      },
      {
        breakpoint: 1179,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  useEffect(() => {
    // First TradingView widget
    const script1 = document.createElement("script");
    script1.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script1.async = true;
    script1.innerHTML = `
      {
        "feedMode": "symbol",
        "symbol": "FOREXCOM:ETHUSD",
        "isTransparent": false,
        "displayMode": "regular",
        "width": 500,
        "height": 700,
        "colorTheme": "dark",
        "locale": "en"
      }
    `;

    containerRefs.current[0].appendChild(script1);

    // Second TradingView widget
    const script2 = document.createElement("script");
    script2.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script2.async = true;
    script2.innerHTML = `
      {
        "feedMode": "symbol",
        "symbol": "BINANCE:XRPUSDT",
        "isTransparent": false,
        "displayMode": "regular",
        "width": 350,
        "height": 350,
        "colorTheme": "dark",
        "locale": "en"
      }
    `;

    containerRefs.current[1].appendChild(script2);

    // Third TradingView widget
    const script3 = document.createElement("script");
    script3.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script3.async = true;
    script3.innerHTML = `
      {
        "feedMode": "symbol",
        "symbol": "BINANCE:LINKUSDT",
        "isTransparent": false,
        "displayMode": "regular",
        "width": 350,
        "height": 350,
        "colorTheme": "dark",
        "locale": "en"
      }
    `;

    containerRefs.current[2].appendChild(script3);

    // Fourth TradingView widget
    const script4 = document.createElement("script");
    script4.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script4.async = true;
    script4.innerHTML = `
      {
        "feedMode": "symbol",
        "symbol": "KUCOIN:SOLUSDT",
        "isTransparent": false,
        "displayMode": "regular",
        "width": 350,
        "height": 350,
        "colorTheme": "dark",
        "locale": "en"
      }
    `;

    containerRefs.current[3].appendChild(script4);

    const script5 = document.createElement("script");
    script5.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script5.async = true;
    script5.innerHTML = `
      {
        "feedMode": "symbol",
        "symbol": "BINANCE:BTCUSDT",
        "isTransparent": false,
        "displayMode": "regular",
        "width": 350,
        "height": 350,
        "colorTheme": "dark",
        "locale": "en"
      }
    `;

    containerRefs.current[4].appendChild(script5);

   

    return () => {
      containerRefs.current[0].removeChild(script1);
      containerRefs.current[1].removeChild(script2);
      containerRefs.current[2].removeChild(script3);
      containerRefs.current[3].removeChild(script4);
      containerRefs.current[4].removeChild(script5);

    };
  }, []);

  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={styles.wrap}>
            <h2 className={cn("h2", styles.title)}>News</h2>
            <div className={styles.nav}>
              {navigation.map((x, index) => (
                <button
                  className={cn(styles.link, {
                    [styles.active]: index === activeIndex,
                  })}
                  onClick={() => setActiveIndex(index)}
                  key={index}
                >
                  {x}
                </button>
              ))}
            </div>
          </div>
          <Link
            className={cn("button-stroke", styles.button)}
            to="/learn-crypto"
          >
            View more
          </Link>
        </div>
        <div className={styles.wrapper}>
          {/* <Slider className={cn("learn-slider", styles.slider)} {...settings}>
            {items.map((x, index) =>
              index < 1 ? (
                <Link className={styles.item} to={x.url} key={index}>
                  <div className={styles.preview}>
                    <img srcSet={${x.image2x} 2x} src={x.image} alt="Card" />
                    {x.play && <Play small />}
                  </div>
                  <div className={styles.line}>
                    <div className={styles.wrap}>
                      <div className={styles.subtitle}>{x.title}</div>
                      <div className={styles.content}>{x.content}</div>
                    </div>
                    <button className={cn("button-stroke", styles.button)}>
                      <span>Learn more</span>
                      <Icon name="arrow-right" size="16" />
                    </button>
                  </div>
                </Link>
              ) : (
                <Link className={styles.item} to={x.url} key={index}>
                  <div className={styles.preview}>
                    <img srcSet={${x.image2x} 2x} src={x.image} alt="Card" />
                    {x.play && <Play small />}
                  </div>
                  <div className={styles.details}>
                    <div className={styles.subtitle}>{x.title}</div>
                    <div className={styles.content}>{x.content}</div>
                    {x.date && <div className={styles.date}>{x.date}</div>}
                  </div>
                </Link>
              )
            )}
          </Slider> */}
        </div>
        {/* <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
          <div className="tradingview-widget-copyright">
            <a
              href="https://www.tradingview.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="blue-text">
                Track all markets on TradingView
              </span>
            </a>
          </div>
        </div> */}

        <div className="section" ref={scrollToRef} style={{display:'flex', marginLeft:-40}}>
  
    
            <div
              className="Learn_wrapper__MsFvy"
              ref={(ref) => (containerRefs.current[0] = ref)}
              style={{marginRight:10}}
            ></div>

          <div
            className="container"
            style={{marginLeft:-20}}
          >
            <div style={{display:'flex', marginLeft:-60}}>
               <div
              className="Learn_wrapper__MsFvy"
              ref={(ref) => (containerRefs.current[2] = ref)}
              style={{marginRight:10}}
            ></div>
            <div
              className="Learn_wrapper__MsFvy"
              ref={(ref) => (containerRefs.current[3] = ref)}
              style={{marginRight:10}}
            ></div>
            </div>

            <div style={{display:'flex',marginLeft:-60}}>

            <div
              className="Learn_wrapper__MsFvy"
              ref={(ref) => (containerRefs.current[1] = ref)}
              style={{marginRight:10}}
            ></div>

            <div
              className="Learn_wrapper__MsFvy"
              ref={(ref) => (containerRefs.current[4] = ref)}
              style={{marginRight:10}}
            ></div>

            </div>
         
          </div>

         
        </div>
     
        </div>
      </div>
  
  );
};

export default Learn;
