import "dotenv/config";
import linebot from "linebot";
import crypto from "./data/crypto.js";

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
});
bot.on("message", (event) => {
  if (event.message.type === "text") {
    if (event.message.text === "BTC") {
      crypto(event);
    }
  }
});
bot.listen("/", process.env.PORT || 3000, () => {
  console.log("機器人起動");
});
