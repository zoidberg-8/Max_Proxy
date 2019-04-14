var path = require("path");
var combineLoaders = require("webpack-combine-loaders");

module.exports = {
  mode: "development",
  entry: __dirname + "/client/src/index.jsx",
  output: {
    path: __dirname + "/client/dist",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            query: {
              modules: true,
              sourceMap: true,
              localIdentName: "[name]__[local]--[hash:base64:5]"
            }
          }
        ])
      }
    ]
  }
};
