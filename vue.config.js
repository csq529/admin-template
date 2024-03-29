const path = require("path");

const resolve = dir => path.join(__dirname, dir);
// const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

module.exports = {
  // 默认'/'，部署应用包时的基本 URL
  publicPath: "./",

  // 'dist', 生产环境构建文件的目录
  outputDir: "dist",

  // 相对于outputDir的静态资源(js、css、img、fonts)目录
  assetsDir: "",

  lintOnSave: false,

  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: true,

  // 生产环境的 source map
  productionSourceMap: false,

  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"));
  },

  configureWebpack: () => {},

  css: {
    modules: false,
    extract: false,
    sourceMap: false,
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: []
      }
    }
  },

  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 9900,
    https: false,
    hotOnly: false
    // proxy: {
    //   "/api": {
    //     target: process.env.VUE_APP_BASE_API || "http://127.0.0.1:8080",
    //     changeOrigin: true
    //   }
    // }
  }
};
