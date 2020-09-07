const path = require('path')

const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/assets/scripts/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist/assets/'),
    filename: 'scripts/[name].js',
    chunkFilename: 'scripts/[name].[chunkhash].js',
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
          {
            loader: 'postcss-loader',
            options: { plugins: [autoprefixer(), cssnano()], sourceMap: true }
          },
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
  resolve: { alias: { src: path.resolve(__dirname, '../src') } },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[name].css'
    })
  ]
}
