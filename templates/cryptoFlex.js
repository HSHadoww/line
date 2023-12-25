export default (cryptoData) => {
  if (!cryptoData) {
    // 在 cryptoData 未定義時處理
    return {
      type: "text",
      text: "Crypto data is undefined.",
    };
  }

  return {
    type: "flex",
    altText: "Crypto Price Update",
    contents: {
      type: "bubble",
      hero: {
        type: "image",
        url: cryptoData.image,
        size: "full",
        aspectRatio: "1:1",
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: cryptoData.name,
            weight: "bold",
            size: "xl",
          },
          {
            type: "text",
            text: cryptoData.symbol,
            size: "md",
            color: "#888888",
          },
          {
            type: "text",
            text: `$${cryptoData.price ? cryptoData.price.toFixed(2) : "N/A"}`,
            margin: "md",
            size: "xl",
            weight: "bold",
          },
          {
            type: "text",
            text: `Low: $${cryptoData.low ? cryptoData.low.toFixed(2) : "N/A"}`,
            margin: "md",
            size: "sm",
            color: "#888888",
          },
          {
            type: "text",
            text: `High: $${
              cryptoData.high ? cryptoData.high.toFixed(2) : "N/A"
            }`,
            size: "sm",
            color: "#888888",
          },
        ],
      },
    },
  };
};
