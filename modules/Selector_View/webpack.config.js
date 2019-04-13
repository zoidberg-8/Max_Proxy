const path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
}






// var path = require('path');
// var SRC_DIR = path.join(__dirname, '/client/src');
// var DIST_DIR = path.join(__dirname, '/client/dist');

// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?/,
//         include: SRC_DIR,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015']
//         }
//       }
//     ],
//     rules: [
//       {
//         test: /\.css$/,
//           {loader: use: 'style-loader'},
//           {loader: 'css-loader'}
//       },
//       {
//         test: /\.css$/,
//         use: 'style-loader'
//       }
//         // loader: combineLoaders([
//         //   {
//         //     loader: "style-loader"
//         //   },
//         //   {
//         //     loader: "css-loader",
//         //     query: {
//         //       modules: true,
//         //       sourceMap: true,
//         //       // localIdentName: "[name]__[local]--[hash:base64:5]"
//         //     }
//         //   }
//         // ])
//       }
//     ]
//   }
// };
