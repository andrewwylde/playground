import template from './templates/index.hbs';
import { pages } from './lib';

require('./scss/main.scss');

window.addEventListener( 'load', () => {
  var div = document.createElement('div');
  div.innerHTML = template({ pages });
  document.body.appendChild( div );
});
