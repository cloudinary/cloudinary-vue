module.exports = {
  presets: ["@vue/app"],
  plugins: ["@babel/plugin-proposal-optional-chaining", ["@babel/plugin-transform-runtime", { corejs: 2 }]]
};
