import axios from "axios";

export default async (event) => {
  try {
    const { data } = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "aad62252-7c6e-41a2-8eda-c05a92d3a847",
        },
      }
    );
    const cryptoData = data.data[0];
    return {
      name: cryptoData.name,
      symbol: cryptoData.symbol,
      price: cryptoData.quote.USD.price,
      low: cryptoData.quote.USD.low_24h,
      high: cryptoData.quote.USD.high_24h,
      image: `https://s2.coinmarketcap.com/static/img/coins/64x64/${cryptoData.id}.png`,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
