var path = require('path');
var SRC_DIR = path.resolve(__dirname, 'client/src');
var DIST_DIR = path.resolve(__dirname, 'client/dist');


module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        // include: SRC_DIR,
        loader: 'babel-loader',
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: 'url-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    // modules: ['node_modules'],
  },
  mode: 'production',
};
