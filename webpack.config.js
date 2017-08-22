const NunjucksWebpackPlugin = require('nunjucks-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const { resolve, extname } = require('path');
const { readFileSync, writeFileSync } = require('fs');

module.exports = (env) => ({
  entry: {
    bundle: resolve(__dirname, 'index.js'),
  },
  output: {
    path: resolve(__dirname, 'dist'),
  },
  module: {},
  devServer: {
    hot: true,
  },
  devtool: 'source-map',
  plugins: [
    new HotModuleReplacementPlugin(),
    new NunjucksWebpackPlugin({
      template: [
        {
          from: resolve(__dirname, 'template.njk'),
          to: 'index.html',
        },
      ],
      context: {
        user: 'Ændrew',
      },
      writeToFileWhenMemoryFs: env === 'useMemoryFS',
    }),
  ],
});
