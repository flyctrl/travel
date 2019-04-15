const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

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
      .set('Utils', resolve('src/utils'))
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
  },
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: 'warning',
      maxEntrypointSize: 5000000,
      maxAssetSize: 3000000,
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      }
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: !process.env.NODE_ENV === 'production',
              drop_console: process.env.NODE_ENV === 'production', // console
              drop_debugger: false,
              pure_funcs: ['console.log'] // 移除console
            },
            output: {
              // 去掉注释内容
              comments: false
            }
          }
        })
      ]
    }
  }
}
