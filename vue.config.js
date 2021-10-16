const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  //路径简写
  chainWebpack: config => {
    // 设置快捷路径， @ 表示 'src' ，components 表示 'src/components'
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets")) //静态文件前要加~，否则只会以当前目录为基准
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"))
      .set("store", resolve("src/store"));
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          // 补全css前缀(解决兼容性)
          require("autoprefixer")(),
          // 把px单位换算成rem单位
          require("postcss-pxtorem")({
            rootValue: 37.5, // 换算的基数(设计图750的根字体为32)
            // selectorBlackList: [], // 要忽略的选择器并保留为px。
            propList: ["*"], //可以从px更改为rem的属性。
            minPixelValue: 2 // 设置要替换的最小像素值。
          })
        ]
      }
    }
  }
};
