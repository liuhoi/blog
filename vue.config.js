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
    config.module.rule('md')
    .test(/\.md/)
    .use('vue-loader')
    .loader('vue-loader')
    .end()
    .use('vue-markdown-loader')
    .loader('vue-markdown-loader/lib/markdown-compiler')
    .options({
      raw: true,
      breaks: true,
      html: true,
      linkify: true,
      preprocess: function(markdownIt, source) {
        
        return source;
      },
    })
  },
  devServer:{
    port:9000
  }
}