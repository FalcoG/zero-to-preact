const path = require('path');

module.exports = {
  // entry file - starting point for the app
  entry: './src',

  // where to dump the output of a production build
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },

  resolve: {
    modules: ['src', 'lib', 'node_modules'],
    alias: {
      '@lib': path.resolve(process.cwd(), 'lib')
    }
  },

  module: {
    rules: [
      {
        test: /\.js?/i,
        include: [/src/, /lib/],
        loader: 'babel-loader'
      }
    ]
  },

  // enable Source Maps
  devtool: 'source-map',

  devServer: {
    // serve up any static files from src/
    contentBase: path.join(__dirname, 'src'),

    // enable gzip compression:
    compress: true,

    // enable pushState() routing, as used by preact-router et al:
    historyApiFallback: true
  }
};
