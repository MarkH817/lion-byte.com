const path = require('path')

const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

const paths = require('./paths')

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    feed: path.resolve(paths.styles, './feed.less'),
    main: path.resolve(paths.scripts, './index.ts'),
    post: path.resolve(paths.styles, './post.less')
  },
  output: {
    path: paths.dist,
    filename: 'scripts/[name].js',
    chunkFilename: 'scripts/[name].bundle.js',
    publicPath: '/assets/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: [/node_modules/],
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.(css|less)$/,
        use: [
          MiniCSSExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                config: path.resolve(__dirname, './postcss.config.js')
              }
            }
          },
          { loader: 'less-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)$/i,
        type: 'asset/resource',
        generator: { filename: 'fonts/[name][ext]' }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: { filename: 'images/[path][name].[contenthash][ext]' }
      }
    ]
  },
  resolve: {
    alias: {
      app: paths.scripts,
      styles: paths.styles
    },
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[name].bundle.css'
    })
  ]
}
