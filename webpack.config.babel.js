import path from 'path';
import getConfig from './config';

const defaults = {
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
      { test: /\.hbs$/, loader: 'handlebars-loader' },
      {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  devServer: {
    inline: true,
    open: true,
    hot: true,
    lazy: false,
    contentBase: './dist'
  }
};

export default opts => {
  return new Promise( ( resolve, reject ) => {
    getConfig().then( opts => resolve( Object.assign( defaults, opts ) ) );
  });
};
