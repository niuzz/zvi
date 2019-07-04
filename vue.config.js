const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  pages: {
    index: {
      entry: 'site/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    port: 3000
  },
  chainWebpack: config => {
    config.module
      .rule('js|jsx')
      .include
      .add('/libs')
      .end()
      .use('babel')
      .loader('babel-loader')
    config.resolve.alias
      .set('@', resolve('site'))
      .set('&', resolve('libs'))
    config.resolve.extensions
      .values(['.js', '.vue', '.json', '.css', '.md'])
  }
}
