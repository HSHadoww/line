export default (cryptoData) => {
  // Check if cryptoData is defined
  if (!cryptoData) {
    console.error('Error: cryptoData is undefined')
    return null // or handle the error in your preferred way
  }

  // Check if the necessary properties are defined before accessing them
  const price = cryptoData.price !== undefined ? `$${cryptoData.price.toFixed(2)}` : 'N/A'
  const low = cryptoData.low !== undefined ? `$${cryptoData.low.toFixed(2)}` : 'N/A'
  const high = cryptoData.high !== undefined ? `$${cryptoData.high.toFixed(2)}` : 'N/A'

  return {
    type: 'flex',
    altText: 'Crypto Price Update',
    contents: {
      type: 'bubble',
      hero: {
        type: 'image',
        url: cryptoData.image || 'default_image_url', // Provide a default image URL if not available
        size: 'full',
        aspectRatio: '1:1'
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: cryptoData.name || 'N/A',
            weight: 'bold',
            size: 'xl'
          },
          {
            type: 'text',
            text: cryptoData.symbol || 'N/A',
            size: 'md',
            color: '#888888'
          },
          {
            type: 'text',
            text: price,
            margin: 'md',
            size: 'xl',
            weight: 'bold'
          },
          {
            type: 'text',
            text: `Low: ${low}`,
            margin: 'md',
            size: 'sm',
            color: '#888888'
          },
          {
            type: 'text',
            text: `High: ${high}`,
            size: 'sm',
            color: '#888888'
          }
        ]
      }
    }
  }
}
