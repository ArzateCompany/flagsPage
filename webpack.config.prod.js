const PATH = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    app: PATH.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: PATH.resolve(__dirname, 'dist'),
    publicPath: 'https://arzatecompany.github.io/flagsPage/',
    filename: 'js/[name].[fullhash].js',
    chunkFilename: 'js/[id].[chunkhash].js',
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
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      }
    ],
  },
  optimization: {
    splitChunks: {
      name: 'commons',
      minSize: 0,
      chunks: 'all',
    },
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATH.resolve(__dirname, 'public/index.html')
    }),
    new Webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[fullhash].css'
    }),
    // new AddAssetHtmlPlugin({
    //   filepath: PATH.resolve(__dirname, 'dist/js/*.dll.js'),
    //   outputPath: 'js',
    //   publicPath: 'http://127.0.0.1:5500/js',
    // }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/app.*"]
    }),
  ],
};