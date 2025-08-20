import { useState, useEffect, useCallback } from "react";

export default function useChainRate() {
  const [chainRate, setChainRate] = useState({});
  const fetchRate = async (coin) => {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=gbp`
    );
    return res.json();
  };
  useEffect(() => {
    (async () => {
      try {
        const { bitcoin } = await fetchRate("bitcoin");
        const { ethereum } = await fetchRate("ethereum");
        const { tether } = await await fetchRate("tether");
        const { binancecoin } = await fetchRate("binancecoin");
        const avalanche = await fetchRate("avalanche-2");
        const usdCoin = await fetchRate("usd-coin");
        const binanceUsd = await fetchRate("binance-usd");
        const { dogecoin } = await fetchRate("dogecoin");
        const maticNetwork = await fetchRate("matic-network");
        const { tron } = await fetchRate("tron");
        const { ripple } = await fetchRate("ripple");

        const objData = {
          BTC: bitcoin?.gbp.toFixed(2),
          ETH: ethereum?.gbp.toFixed(2),
          USDT: tether?.gbp.toFixed(2),
          BNB: binancecoin?.gbp.toFixed(2),
          AVAX: avalanche["avalanche-2"]?.gbp.toFixed(2),
          USDC: usdCoin["usd-coin"]?.gbp.toFixed(2),
          BUSD: binanceUsd["binance-usd"]?.gbp.toFixed(2),
          DOGE: dogecoin?.gbp.toFixed(2),
          MATIC: maticNetwork["matic-network"]?.gbp.toFixed(2),
          TRX: tron?.gbp.toFixed(2),
          XRP: ripple?.gbp.toFixed(2),
        };
        setChainRate(objData);
      } catch (error) {}
    })();
  }, []);

  return chainRate;
}
