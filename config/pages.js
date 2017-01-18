const walk = require('fs-walk');

function generatePages() {
  const pages = {};
  // walk through src/pages directory
  walk.walkSync( 'src/pages', ( base, file, stat ) => {
    if( !stat.isDirectory() ) {

      pages[ `${ file.replace( '.js','' ) }` ] = `./${base}/${file}`;
      return;

    }
  }, err => console.log( err ) );
  return pages;
}

module.exports = generatePages;
