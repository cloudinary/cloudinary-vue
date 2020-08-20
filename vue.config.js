const nodeExternals = require("webpack-node-externals");

module.exports = {
  configureWebpack: config => {
    if (process.env.INTERNAL_DEPS) {
      return;
    }
    config.externals = [nodeExternals()];
  }
};
