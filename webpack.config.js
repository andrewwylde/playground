const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const walk = require('fs-walk');

const pages = {};
walk.walkSync( 'src/pages', ( base, file, stat ) => {
  if( stat.isDirectory() ) {
    return;
  } else {
    const str = `./${base}/${file}`;
    pages[ `${ file.replace( '.js','' ) }` ] = str;
  }
}, err => console.log( err ) );

const entry = Object.assign( { app: './src/app.js' }, pages );

const plugins = [];

for ( let singleEntry in pages ) {
  const newHTML = new HtmlWebpackPlugin({
    title: `${singleEntry}`,
    filename: `${singleEntry}.html`,
    template: `!!handlebars!src/templates/${singleEntry}.hbs`,
    chunks: [`${singleEntry}`]
  });
  plugins.push( newHTML );
}

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
  plugins: [
    new HtmlWebpackPlugin({
      chunks:['app']
    }),
    ...plugins
  ],
  devServer: {
    inline: true
  }
};
