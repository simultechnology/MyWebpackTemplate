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
    entry: { timer: './src/js/timer.js', 'use-generator': './src/js/use-generator.js', 'use-promise': './src/js/use-promise.js' },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, './public'),
      host: 'localhost',
      port: 9591,
      watchOptions: {
        watch: true
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
