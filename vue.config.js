// ↓↓↓默认vue.config.js 内容 ↓↓↓↓
// module.exports = {
//   lintOnSave: false
// }
// ↑↑↑  =====   ========   ↑↑↑

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  lintOnSave:false,
  chainWebpack: config => {
    // __dirname 就是指当前目录，也就是根目录
    const dir = path.resolve(__dirname, 'src/assets/icons')

    config.module
      .rule('svg-sprite') //添加规则
      .test(/\.svg$/) //对以 .svg 结尾的(根目录下的所有 .svg)
      .include.add(dir).end()  // *只针对dir 也就是 icons 目录下的 .svg文件*
      //{extract:false} 不要解析为文件
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()

    //配置 svg-sprite 插件
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'),[{plainSprite:true}])

    config.module.rule('svg').exclude.add(dir)  // 其他 svg 排出 icons 目录
  }
}