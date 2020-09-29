const path = require('path')

const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    about: path.resolve(__dirname, '../src/assets/scripts/about.js'),
    feed: path.resolve(__dirname, '../src/assets/scripts/feed.js'),
    main: path.resolve(__dirname, '../src/assets/scripts/index.js'),
    post: path.resolve(__dirname, '../src/assets/scripts/post.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist/assets/'),
    filename: 'scripts/[name].js',
    chunkFilename: 'scripts/[name].bundle.js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          MiniCSSExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'less-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[path][name].[contenthash].[ext]',
              context: 'src/assets/images/'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, '../src/assets/scripts'),
      styles: path.resolve(__dirname, '../src/assets/styles')
    }
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[name].bundle.css',
      esModule: true
    })
  ]
}
