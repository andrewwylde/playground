import path from 'path';
import getConfig from './config';
const publicPath = '/static/';

const defaults = {
  output: {
    filename: '[name].bundle.js',
    path: path.resolve( __dirname, 'dist' ),
    publicPath
  },
  module: {
    loaders: [ {
      test:    /\.js$/,
      exclude: /node_modules/,
      loader:  'babel-loader'
    }, {
      test:    /\.hbs$/,
      loader:  'handlebars-loader'
    }, {
      test:    /\.scss$/,
      loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
    } ]
  },
  devtool: 'eval',
  devServer: {
    inline: true,
    open: true,
    hot: true,
    lazy: false,
    contentBase: './dist',
    publicPath
  }
};

export default opts => {
  return new Promise( ( resolve, reject ) => {
    getConfig()
      .then( opts => resolve( Object.assign( defaults, opts ) ) );
  } );
};
