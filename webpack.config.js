var path = require('path');
module.exports = {
  entry: "./lib/map.js",
  output: {
    filename: "./bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions:  ['.js', '.json', '*']
  }
};
