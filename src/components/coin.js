import React from "react";
import "./coin.scss";

const Coin = ({ image, name, symbol, price, priceChange, marketcap }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{price}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange}%</p>
          ) : (
            <p className="coin-percent green">{priceChange}%</p>
          )}
          <p className="coin-marketcap">
            Mkt Cap: {marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
