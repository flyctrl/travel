const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('Assets', resolve('src/assets'))
      .set('Common', resolve('src/common'))
      .set('Styles', resolve('src/assets/styles'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/static/mock'
        }
      }
    }
  }
}
