const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

function generatePlugins( pages ) {
  const plugins = [];

  for ( let singleEntry in pages ) {

    const newHTML = new HtmlWebpackPlugin( {
      title: `${singleEntry}`,
      filename: `${singleEntry}.html`,
      template: `!!handlebars-loader!src/templates/${singleEntry}.hbs`,
      chunks: [ `${singleEntry}` ]
    } );

    plugins.push( newHTML );
  }
  plugins.unshift( new HtmlWebpackPlugin( {
    title: '100 Pots',
    chunks: [ 'app' ]
  } ) );

  return plugins;
}

module.exports = generatePlugins;
