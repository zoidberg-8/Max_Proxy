module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use:{loader: 'style-loader'}
      },
      {
        test: /\.css$/,
        use:{loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }}

    ]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/public/dist'
  }
};