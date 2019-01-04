const px2rem = require('postcss-px2rem')

module.exports = {
  baseUrl: process.env.NODE_ENV === 'development' ? '/' : '/pages/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 75
          })
        ]
      }
    }
  }
}
