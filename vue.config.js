const nodeExternals = require("webpack-node-externals");

module.exports = {
  configureWebpack: config => {
    if (process.env.STYLEGUIDE) {
      return;
    }
    config.externals = [nodeExternals()];
  }
};
