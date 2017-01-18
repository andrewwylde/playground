const path = require('path');

const generatePages = require('./config/pages');
const generatePlugins = require('./config/plugins');

const pages = generatePages();
const entry = Object.assign({ app: './src/app.js' }, pages );

const plugins = generatePlugins( pages );
module.exports = {
  entry,
  output: {
    path: path.resolve( __dirname, 'dist' ),
    publicPath: '/static',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'
      },
      { test: /\.hbs$/, loader: 'handlebars' },
      {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  plugins,
  devServer: {
    inline: true,
    open: true,
    hot: true,
    lazy: false,
    contentBase: './dist'
  }
};
