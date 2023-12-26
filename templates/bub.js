export default () => {
  return {
    type: 'flex',
    altText: 'Crypto Price Update',
    contents: {
      type: 'bubble',
      hero: {
        type: 'image',
        url: cryptoData.image,
        size: 'full',
        aspectRatio: '1:1'
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: cryptoData.name,
            weight: 'bold',
            size: 'xl'
          },
          {
            type: 'text',
            text: cryptoData.symbol,
            size: 'md',
            color: '#888888'
          },
          {
            type: 'text',
            text: `$${cryptoData.price.toFixed(2)}`,
            margin: 'md',
            size: 'xl',
            weight: 'bold'
          },
          {
            type: 'text',
            text: `Low: $${cryptoData.low.toFixed(2)}`,
            margin: 'md',
            size: 'sm',
            color: '#888888'
          },
          {
            type: 'text',
            text: `High: $${cryptoData.high.toFixed(2)}`,
            size: 'sm',
            color: '#888888'
          }
        ]
      }
    }
  }
}
