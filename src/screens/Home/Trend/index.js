import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Trend.module.sass";
import { Link } from "react-router-dom";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import axios from "axios"




const calculatePriceChangePercentage = (price1, price2) => {
  if (!price1 || !price2) return "0.00%"; 
  const change = (price2 - price1) / price1 * 100;
  return `${change.toFixed(2)}%`;
};



const desiredCurrencies = ["bitcoin", "ethereum", "solana", "ripple", "dogecoin"];
const Learn = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);
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
          
          
          volume24h: `$${currency.total_volume.toLocaleString("en-US")}`, // Format volume with USD symbol
          image: `/images/content/currency/${currency.symbol.toLowerCase()}.svg`,
          marketcap: `$${currency.market_cap.toLocaleString("en-US")}`, // Format marketcap
          url: `/exchange/${currency.id}`,
          historicalPrices: currency.sparkline_in_7d.price
          .slice(-7) // Slice the last 7 days
          .map((price, index) => ({
            day: `Day ${index + 1}`, // Change here to represent the day
            price: price,
          })),
        }));


        setItems(formattedData);
     
      

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
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.line}>
          <h2 className={cn("h2", styles.title)}>Market trend</h2>
        </div>
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.col}>#</div>
            <div className={styles.col}>Name</div>
            <div className={styles.col}>Price</div>
            <div className={styles.col}>24h Change</div>
            <div className={styles.col}>Chart</div>
          </div>
          
          {items.map((x, index) => (
            <Link className={styles.row} to={x.url} key={index}>
              <div className={styles.col}>{index + 1}</div>
              <div className={styles.col}>
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <img src={x.image} alt={x.currency.toLowerCase()} />
                  </div>
                  <div className={styles.details}>
                    <span className={styles.subtitle}>{x.title}</span>
                    <span className={styles.currency}>{x.currency}</span>
                  </div>
                </div>
              </div>
              <div className={styles.col}>{x.price}</div>
              <div
  className={styles.col}
  style={{ color: x.priceChangePercentage24h.includes('+') ? 'green' : 'red' }}
>
  {x.priceChangePercentage24h}
</div>
              <div className={styles.col}>
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;

