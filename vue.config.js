const path = require('path')
// const hljs = require('highlight.js')

function resolve (dir) {
  return path.join(__dirname, dir)
}

function wrapCustomClass (render) {
  return function (...args) {
    return render(...args)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
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
  css: { extract: false },
  chainWebpack: config => {
    config.module
      .rule('js|jsx')
      .include
      .add('/libs')
      .end()
      .use('babel')
      .loader('babel-loader')
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
        preprocess: (MarkdownIt, source) => {
          MarkdownIt.renderer.rules.fence = wrapCustomClass(MarkdownIt.renderer.rules.fence)
          return source
        },
        use: [
          [require('markdown-it-container'), 'demo', {
            validate: (params) => params.trim().match(/^demo\s*(.*)$/),
            render: (tokens, idx) => {
              if (tokens[idx].nesting === 1) {
                // 1.获取第一行的内容使用markdown渲染html作为组件的描述
                let demoInfo = tokens[idx].info.trim().match(/^demo\s+(.*)$/)
                let description = (demoInfo && demoInfo.length > 1) ? demoInfo[1] : ''
                let descriptionHTML = description ? require('markdown-it')().render(description) : ''
                // 2.获取代码块内的html和js代码
                let content = tokens[idx + 1].content
                // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
                return `<demo-block>
                <div class="source" slot="source">${content}</div>
                ${descriptionHTML}
                <div class="hljs" slot="highlight">`
              } else {
                return '</div></demo-block>\n'
              }
            }
          }],
          [require('markdown-it-container'), 'code', {
            validate: (params) => params.trim().match(/^code\s*(.*)$/),
            render: (tokens, idx) => {
              if (tokens[idx].nesting === 1) {
                // 1.获取第一行的内容使用markdown渲染html作为组件的描述
                let demoInfo = tokens[idx].info.trim().match(/^code\s+(.*)$/)
                let description = (demoInfo && demoInfo.length > 1) ? demoInfo[1] : ''
                let descriptionHTML = description ? require('markdown-it')().render(description) : ''
                // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
                return `<demo-block>
                ${descriptionHTML}
                <div class="hljs" slot="highlight">`
              } else {
                return '</div></demo-block>\n'
              }
            }
          }]
        ]
      })
    config.resolve.alias
      .set('@', resolve('site'))
      .set('&', resolve('libs'))
    config.resolve.extensions
      .values(['.js', '.vue', '.json', '.css', '.md'])
  }
}
