const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const PUBLIC_PATH = 'fishone.xyz/';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: PUBLIC_PATH
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpe?g|gif|m4r)$/,
        use: ['file-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/reason.html',
      filename: 'reason.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/secret.html',
      filename: 'secret.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'common' }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new CleanWebpackPlugin(['dist']),
    new SWPrecacheWebpackPlugin({
      cacheId: 'my-project-name',
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      // minify: true,
      navigateFallback: PUBLIC_PATH + 'index.html',
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
      mergeStaticsConfig: true
    })
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css', '.html', 'ts', 'tsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    inline: true,
    open: true
  }
};
