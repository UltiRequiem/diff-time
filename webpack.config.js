const path = require('path')

const Dotenv = require('dotenv-webpack')
const HtmlPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')

/** @param {string} dir */
const fm = (dir) => path.join(__dirname, dir)

module.exports = {
  entry: './src/index.js',

  output: {
    path: fm('dist'),
    filename: '[name].[contenthash].js'
  },

  mode: 'production',

  resolve: {
    extensions: ['.js'],
    alias: {
      '@components': fm('src/components'),
      '@containers': fm('src/containers'),
      '@utils': fm('src/utils'),
      '@pages': fm('src/pages')
    }
  },

  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }]
      }
    ]
  },

  plugins: [
    new Dotenv({
      path: './.env',
      safe: true,
      allowEmptyValues: true,
      systemvars: true,
      silent: true,
      defaults: false
    }),
    new CleanWebpackPlugin(),
    new HtmlPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new HtmlMinimizerPlugin()],
    splitChunks: {
      chunks: 'all',
      minSize: 1000 * 600
    }
  }
}
