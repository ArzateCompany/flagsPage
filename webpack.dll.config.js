const PATH = require('path');
const Webpack = require('webpack');

module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom'
    ],
  },
  output: {
    path: PATH.resolve(__dirname, 'dist'),
    filename: 'js/[name].dll.js',
    library: '[name]',
  },
  plugins: [
    new Webpack.DllPlugin({
      name: '[name]',
      path: PATH.join(__dirname, '[name]-manifest.json')
    })
  ],
};