// crypto.js
import axios from "axios";

export default async function fetchCryptoData(symbol) {
  try {
    const { data } = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY,
        },
      }
    );

    const matchedCrypto = data.data.find(
      (cryptoData) => cryptoData.symbol.toLowerCase() === symbol.toLowerCase()
    );

    if (matchedCrypto) {
      const cryptoData = {
        name: matchedCrypto.name,
        symbol: matchedCrypto.symbol,
        price: matchedCrypto.quote.USD.price,
        low: matchedCrypto.quote.USD.low_24h,
        high: matchedCrypto.quote.USD.high_24h,
        image: `https://s2.coinmarketcap.com/static/img/coins/64x64/${matchedCrypto.id}.png`,
      };

      return [cryptoData];
    } else {
      return [];
    }
  } catch (error) {
    console.error("獲取加密貨幣數據時錯誤:", error);
    return [];
  }
}
