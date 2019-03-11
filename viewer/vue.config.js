module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === "styleguide") {
      return;
    }
    config.externals = ["lodash", "cloudinary-core", "cloudinary-video-player"];
  }
};
