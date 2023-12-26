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
      console.log("接收到消息:", event.message.text);
      if (event.message.text.toLowerCase() === "使用手冊") {
        const manualMessage =
          "使用非常簡單輸入你想要查詢的幣種名稱就行，例:BTC、ETH等等";
        event.reply(manualMessage);
        return; // 如果是手冊請求，停止進一步處理
      }
      const cryptoDataList = await cryptoDataFetcher(event.message.text);

      if (cryptoDataList.length > 0) {
        const flexMessage = createCryptoFlex(cryptoDataList[0]); // 假设只期望一个结果
        console.log("Flex 消息:", flexMessage);
        event.reply(flexMessage);
      } else {
        event.reply(`無法獲取加密貨幣數據，可能 ${event.message.text} 無效。`);
      }
    } catch (error) {
      console.error("處理消息時錯誤:", error);
      event.reply("發生錯誤，請稍後重試。");
    }
  }
});

bot.listen("/", process.env.PORT || 3000, () => {
  console.log("機器人起動");
});
