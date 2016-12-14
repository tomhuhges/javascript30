import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

export default function prod (options) {
  return {
    output: {
      publicPath: '/',
      filename: '[name].[chunkhash].js'
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css'),
          include: options.paths.css
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin( [options.paths.build], {
        root: process.cwd()
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false
      },
      mangle: {
        except: ['webpackJsonp']
      }
    }),
      new ExtractTextPlugin('[name].[chunkhash].css')
    ]
  }
}