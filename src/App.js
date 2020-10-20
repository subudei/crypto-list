import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./components/coin";

import "./App.scss";

function App() {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);
  const [val, setVal] = useState("eur");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${val}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => alert(error));
  }, [val]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Top 100 Cryptocurrencies by CoinGecko</h1>
        <form>
          <input
            type="text"
            placeholder="Search a currency"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <h3 className="values-text">All values are displayed in {val}</h3>
      {val == "eur" ? (
        <button className="btnTgl" onClick={() => setVal("usd")}>
          Convert to USD
        </button>
      ) : (
        <button className="btnTgl" onClick={() => setVal("eur")}>
          Convert to EUR
        </button>
      )}

      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}
export default App;
