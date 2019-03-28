const path = require("path");
const {
  argv: { env }
} = require("yargs");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: path.resolve(__dirname, "./src/index.js"),
  devtool: "inline-source-map",
  output: {
    library: "cloudinaryVue",
    libraryTarget: "umd",
    filename: {
      regular: "cloudinary-vue.js",
      minified: "cloudinary-vue.min.js"
    }[env],
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
    path: path.resolve(__dirname, "./dist"),
    auxiliaryComment: "/* eslint-disable */"
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.vue)$/,
        loader: "vue-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ],
  ...(env === "minified"
    ? {
        optimization: {
          minimizer: [new TerserPlugin()]
        }
      }
    : {
        optimization: {
          minimize: false
        }
      }),
  externals: {
    "cloudinary-core": {
      commonjs: "cloudinary-core",
      commonjs2: "cloudinary-core",
      amd: "cloudinary-core",
      umd: "cloudinary",
      root: "cloudinary"
    },
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      umd: "lodash",
      root: "_",
      amd: "lodash"
    }
  },
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src")],
    extensions: [".json", ".js", ".jsx", ".vue"]
  }
};
