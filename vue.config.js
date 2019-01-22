module.exports = {
  configureWebpack: config => {
    config.externals = {
      ...config.externals,
      "cloudinary-core": "cloudinary-core"
    };
  }
};
