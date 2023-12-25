import "dotenv/config";
import linebot from "linebot";
import cryptoDataFetcher from "./data/crypto.js";
import createCryptoFlex from "./templates/cryptoFlex.js";

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
});

bot.on("message", async (event) => {
  if (event.message.type === "text") {
    try {
      const cryptoData = await cryptoDataFetcher(event.message.text);
      if (cryptoData) {
        const flexMessage = createCryptoFlex(cryptoData);
        event.reply(flexMessage);
      } else {
        event.reply(`無法获取加密货币数据，可能 ${event.message.text} 无效。`);
      }
    } catch (error) {
      console.error(error);
      event.reply("发生错误，请稍后重试。");
    }
  }
});

bot.listen("/", process.env.PORT || 3000, () => {
  console.log("機器人起動");
});
