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
    entry: { timer: './src/js/timer.js', 'use-generator': './src/js/use-generator.js' },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, './public'),
      host: '127.0.0.1',
      port: 9591,
      watchOptions: {
        watch: true,
        poll: 1000
      },
      open: true
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
];
