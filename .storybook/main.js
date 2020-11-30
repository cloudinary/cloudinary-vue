const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    config.resolve.alias["core-js/modules"] =
      "@storybook/core/node_modules/core-js/modules";
    config.resolve.alias["core-js/features"] =
      "@storybook/core/node_modules/core-js/features";
    return config;
  },
};