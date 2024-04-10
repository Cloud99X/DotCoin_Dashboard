import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Trade.module.sass";

import Icon from "../../../../components/Icon.js";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import axios from "axios"; 





const calculatePriceChangePercentage = (price1, price2) => {
  if (!price1 || !price2) return "0.00%"; 
  const change = (price2 - price1) / price1 * 100;
  return `${change.toFixed(2)}%`;
};

const calculateMarketDrop = (volume, marketCapChange) => {
  // Implement 
  return `${Math.abs(marketCapChange).toFixed(2)}%`; 
};

const desiredCurrencies = [
  "bitcoin",
  "ethereum",
  "ripple",
  "dogecoin",
  "eos", 
  "tether", 
  "cardano", 
  "polkadot", 
  "usd-coin", 
  "uniswap", 
];
const Trade = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const coingeckoApiKey = "CG-vokvos3N2QsQ1Xm53YzypLsf";
  const pollingInterval = 2000; // 2 seconds (adjust based on rate limit)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: desiredCurrencies.join(","), 
              per_page: desiredCurrencies.length, 
              order: "market_cap_desc", 
              sparkline: true, 
            },
            headers: {
              "x-access-token": coingeckoApiKey,
            },
          }
        );
        const formattedData = response.data.map((currency) => ({
          title: currency.name,
          currency: currency.symbol.toUpperCase(),
          price: `$${currency.current_price}`,
          priceChange24h: currency.price_change_24h, 
          priceChangePercentage24h:
            currency.price_change_percentage_24h > 0
              ? `+${currency.price_change_percentage_24h.toFixed(2)}%`
              : `${currency.price_change_percentage_24h.toFixed(2)}%`,
          // Calculate 7-day change percentage from sparkline data
          priceChangePercentage7d: calculatePriceChangePercentage(
            currency.sparkline_in_7d.price[0],
            currency.sparkline_in_7d.price[6]
          ),
          marketDrop: calculateMarketDrop( 
            currency.total_volume,
            currency.market_cap_change_percentage_24h 
          ),
          volume24h: `$${currency.total_volume.toLocaleString("en-US")}`, 
          image: `/images/content/currency/${currency.symbol.toLowerCase()}.svg`,
          marketcap: `$${currency.market_cap.toLocaleString("en-US")}`, 
          url: `/exchange/${currency.id}`,
          historicalPrices: currency.sparkline_in_7d.price
          .slice(-7) // Slice the last 7 days
          .map((price, index) => ({
            day: `Day ${index + 1}`, // Change here to represent the day
            price: price,
          })),
        }));
        setItems(formattedData);
      
      const data = items.map((item) => ({
        name: item.title,
        data: item.sparkline_in_7d.price.map((price, index) => ({
          x: index + 1, 
          y: price,
        })),
      }));        

      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setInterval(fetchData, pollingInterval);

    return () => clearInterval(timer);
  }, []);


 
  return (
    <div className={styles.trade}>
      
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className="sorting">#</div>
          </div>
          <div className={styles.col}>
            <div className="sorting">Name</div>
          </div>
          <div className={styles.col}>
            <div className="sorting">Price</div>
          </div>
          <div className={styles.col}>24h %</div>
          <div className={styles.col}>7d %</div>
          <div className={styles.col}>
            Marketcap 
          </div>
          <div className={styles.col}>
            Volume (24h) 
          </div>
          <div className={styles.col}>Chart</div>
        </div>
      

        {items.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>
              <div className={styles.line}>
                <button className={cn("favorite", styles.favorite)}>
                  <Icon name="star-outline" size="16" />
                </button>
                {index + 1}
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <img src={x.image} alt="Coin" />
                </div>
                <div className={styles.details}>
                  <span className={styles.subtitle}>{x.title}</span>
                  <span className={styles.currency}>{x.currency}</span>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.label}>Price</div>
              {x.price}
            </div>
            <div className={styles.col}>
              <div className={styles.label}>24h</div>
              <span style={{ color: x.priceChangePercentage24h.includes('+') ? 'green' : 'red' }}>
                {x.priceChangePercentage24h}
              </span>

            </div>
            <div className={styles.col}>
              <div className={styles.label}>7d</div>
              <span style={{ color: x.priceChangePercentage7d.includes('-') ? 'red' : 'green' }}>
                {x.priceChangePercentage7d > 0 ? `+${x.priceChangePercentage7d}` : `${x.priceChangePercentage7d}`}
              </span>
            </div>
            <div className={styles.col}>
              <div className={styles.label}>Marketcap</div>
              {x.marketcap}
            </div>
            <div className={styles.col}>
              <div className={styles.label}>Volume (24h)</div>
              {x.volume24h}
            </div>
            <div className={styles.col}>
              <div className={styles.chart}>
              <ResponsiveContainer width={200} height={50}>
                  <AreaChart data={x.historicalPrices}>
                    <Area 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#8884d8" 
                      fill={x.priceChangePercentage24h.includes('+') ? 'green' : 'red'} 
                      fillOpacity={0.5} 
                    />
                    <XAxis dataKey="day" tick={null} />
                    <YAxis type="number" domain={['dataMin', 'dataMax']} tick={null} />
                    <Tooltip />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trade;
