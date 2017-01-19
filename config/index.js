import generatePages from './pages';
import generatePlugins from './plugins';

const config = {};

function assignEntries( pages ) {
  config.entry = Object.assign( {
    app: './src/app.js'
  }, pages );
  return pages;
}

function getConfig() {
  return new Promise( ( resolve, reject ) => {

      return generatePages()
        .then( assignEntries )
        .then( generatePlugins )
        .then( plugins => {
          config.plugins = plugins;
          return plugins;
        } )
        .then( () => resolve( config ) )
        .catch( err => {
          console.error( 'build error: ', err );
          reject( err );
        });
    });

}


export default getConfig;
