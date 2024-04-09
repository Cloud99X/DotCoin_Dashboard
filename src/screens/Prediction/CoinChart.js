import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const CoinChart = ({ symbol }) => {
  const [historicalData, setHistoricalData] = useState([]);
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${symbol}/market_chart?vs_currency=usd&days=365`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        if (!data.prices || data.prices.length === 0) {
          throw new Error("No historical data available for this coin");
        }
        console.log(data.prices);
        setHistoricalData(data.prices);
      } catch (error) {
        console.error(`Error fetching historical data for ${symbol}:`, error);
      }
    };

    fetchHistoricalData();
  }, [symbol]);

  useEffect(() => {
    if (historicalData.length > 0 && canvasRef.current) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const ctx = canvasRef.current.getContext("2d");

      const priceData = historicalData.map((entry) => entry[1]);
      const borderColor = priceData.map((price, index) => {
        if (index === 0) return "#3DBAA2"; // Initial color
        const prevPrice = priceData[index - 1];
        return price > prevPrice ? "#3DBAA2" : "#FF7A68"; // Green if price rises, red if price falls
      });

      chartRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: historicalData.map((entry) =>
            new Date(entry[0]).toLocaleDateString()
          ),
          datasets: [
            {
              label: `${symbol.toUpperCase()} Price (USD)`,
              data: priceData,
              fill: false,
              borderColor: borderColor,
              borderWidth: 1,
              pointRadius: 0,
            },
          ],
        },
        options: {
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
            responsive: true,
            maintainAspectRatio: false,
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }
  }, [historicalData, symbol]);

  return <canvas ref={canvasRef} />;
};

export default CoinChart;
