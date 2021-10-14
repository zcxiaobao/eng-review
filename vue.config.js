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
  }
};
