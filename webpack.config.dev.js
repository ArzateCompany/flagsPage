const PATH = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: PATH.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: PATH.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:9000/',
  },
  devServer: {
    open: true,
    hot: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATH.resolve(__dirname, 'public/index.html')
    })
  ],
};