import { log } from './lib';
console.log( log );

document.addEventListener( 'DOMContentLoaded', () => {
  const hack = document.createElement('h1');
  hack.textContent = 'FUCK YOUUUUUUUUUUUUU H1111111';
  document.body.appendChild( hack );
})
