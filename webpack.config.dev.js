const path = require('path')

const Dotenv = require('dotenv-webpack')
const HtmlPlugin = require('html-webpack-plugin')

/** @param {string} dir */
const fm = (dir) => path.join(__dirname, dir)

module.exports = {
  entry: './src/index.js',

  mode: 'development',
  devtool: 'source-map',

  devServer: {
    static: {
      directory: fm('dist'),
    },
    compress: false,
    port: 3000,
  },

  resolve: {
    alias: {
      '@components': fm('src/components'),
      '@containers': fm('src/containers'),
      '@utils': fm('src/utils'),
      '@config': fm('src/config'),
    },
  },

  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },

  plugins: [
    new Dotenv({
      path: './.env',
      safe: true,
      allowEmptyValues: true,
      systemvars: true,
      silent: true,
      defaults: false,
    }),
    new HtmlPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
}
