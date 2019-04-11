const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('Assets', resolve('src/assets'))
      .set('Components', resolve('src/components'))
      .set('Styles', resolve('src/assets/styles'))
  }
}
