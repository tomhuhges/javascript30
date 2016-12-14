import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import merge from 'webpack-merge'
import validate from 'webpack-validator'
import dev from './webpack.config.dev'
import prod from './webpack.config.prod'

let paths = {
  src: path.join(__dirname, '/src'),
  build: path.join(__dirname, '/dist'),
  css: path.join(__dirname, '/src/css'),
  images: path.join(__dirname, '/src/components/projects'),
  audio: path.join(__dirname, '/src/components/projects/one/audio')
}

let defaults = {
  entry: {
    app: paths.src,
    style: paths.css + '/style.css'
  },
  output: {
    path: paths.build
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'javascript30 projects',
      template: './src/index.ejs'
    }),
    new HtmlWebpackPlugin({
      filename: '200.html',
      title: 'javascript30 projects',
      template: './src/index.ejs'
    })
  ]
}

let config

if ( process.env.npm_lifecycle_event === 'build' ) {

  // prod config
  config = merge(
    defaults, 
    prod({
      paths: paths
    })
  )

} else {

  // dev config
  config = merge(
    defaults,
    dev({
      paths: paths,
      server: {
        host: process.env.HOST,
        port: process.env.PORT
      }
    })
  )
}

export default validate(config)