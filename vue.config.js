const { defineConfig } = require("@vue/cli-service");
const path = require("path");

const vueSrc = "./src/renderer";

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/renderer/main.ts",
    },
  },
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: "src/main/index.ts",
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, vueSrc),
      },
    },
  },
});
