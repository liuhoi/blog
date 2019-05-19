const path = require('path');

const resolve = dir => path.join(__dirname, dir)

const publicPath = process.env.NODE_ENV
  ?'/'
  :'/'

module.exports = {
  publicPath:publicPath,
  lintOnSave:false,
  productionSourceMap:false,
  chainWebpack: config => {
    config.resolve.alias
    .set('@', resolve('src'))
    .set('_c', resolve('src/components'));
  },
  devServer:{
    port:9000
  }
}