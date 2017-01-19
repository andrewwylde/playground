const walk = require('fs-walk');

function endWalk( err, res, rej, pages ) {
  if ( err ) {
    console.error( err );
    rej( err );
  } else {
    res( pages );
  }
}

function generatePages() {

  const pages = {};

  return new Promise( ( resolve, reject ) => {

    // walk through src/pages directory
    walk.walk( 'src/pages', ( base, file, stat, next ) => {
      if( !stat.isDirectory() ) {

        pages[ `${ file.replace( '.js','' ) }` ] = `./${base}/${file}`;
        next();

      }
    }, err => {
      endWalk( err, resolve, reject, pages );
    }  );
  });
}

module.exports = generatePages;
