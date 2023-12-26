import 'dotenv/config'
import linebot from 'linebot'
import cryptoDataFetcher from './data/crypto.js'
import createCryptoFlex from './templates/cryptoFlex.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async (event) => {
  if (event.message.type === 'text') {
    try {
      console.log('接收到消息:', event.message.text)

      const cryptoDataList = await cryptoDataFetcher(event.message.text)

      if (cryptoDataList.length > 0) {
        const flexMessage = createCryptoFlex(cryptoDataList[0]) // 假设只期望一个结果
        console.log('Flex 消息:', flexMessage)
        event.reply(flexMessage)
      } else {
        event.reply(`无法获取加密货币数据，可能 ${event.message.text} 无效。`)
      }
    } catch (error) {
      console.error('处理消息时出错:', error)
      event.reply('发生错误，请稍后重试。')
    }
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人起動')
})
