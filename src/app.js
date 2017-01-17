import { log } from './lib';
import pages from './pages';

window.addEventListener( 'load', () => {
  const hack = document.createElement('h1');
  hack.textContent = 'Andrew\'s Playground';

  document.body.appendChild( hack );
  const navList = document.createElement('ul');
  navList.classList.add('nav');


  for ( let { name } of pages ) {
    const navEl = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.textContent = name;
    navLink.href = `/dist/${name}.html`;

    navEl.append( navLink );
    navList.append( navEl );


  }
  document.body.appendChild( navList );
});
