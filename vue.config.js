const path = require('path');

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV
  ?'/'
  :'/'

module.exports = {
  baseUrl:BASE_URL,
  lintOnSave:false,
  productionSourceMap:false,
  chainWebpack: config => {
    config.resolve.alias
    .set('@', resolve('src'))
    .set('_c', resolve('src/components'))
  },
  devServer:{
    port:9000
  }
}