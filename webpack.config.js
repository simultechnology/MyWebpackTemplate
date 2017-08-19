let path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: "app.bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    host: '127.0.0.1',
    port: 9590,
    open: true
  }
};