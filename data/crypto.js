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
    const cryptoData = response.data.data[0];
  } catch (error) {
    console.log(error);
  }
};
