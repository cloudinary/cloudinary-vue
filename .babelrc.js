module.exports = {
  presets: [
    "@vue/babel-preset-jsx",
    ...(process.env.MODULE === "CJS"
      ? [
          [
            "@babel/preset-env",
            {
              useBuiltIns: false
            }
          ]
        ]
      : process.env.MODULE === "ES"
      ? [
          [
            "@babel/preset-env",
            {
              useBuiltIns: false,
              targets: {
                esmodules: true
              },
              modules: false
            }
          ]
        ]
      : process.env.JEST
      ? [
          [
            "@babel/preset-env",
            {
              targets: {
                node: "current"
              }
            }
          ]
        ]
      : ["@babel/preset-env"])
  ]
};
