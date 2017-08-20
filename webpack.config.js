let path = require('path');

module.exports = [
  // {
  //   entry: './app.js',
  //   output: {
  //     filename: "app.bundle.js"
  //   },
  //   devServer: {
  //     contentBase: path.resolve(__dirname, './public'),
  //     host: '127.0.0.1',
  //     port: 9590,
  //     open: true
  //   }
  // },
  {
    entry: './src/js/timer.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: "timer.bundle.js"
    },
    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
      host: '127.0.0.1',
      port: 9591,
      watchOptions: {
        watch: true,
        poll: 1000
      },
      open: true
    },
  }

];