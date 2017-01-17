console.log('sticky');

// import the styles. gotta automate this soon :/
require('../scss/sticky.scss'); //jshint ignore:line

const raf = window.requestAnimationFrame;
const caf = window.cancelAnimationFrame;
let active = false;
let currentlyReading;
let topOffset;
const bufferDistance = 50; // needed an arbitrary value within which it's acceptable to flop
const stickyNav = document.querySelector('.nav-container');
const dataDiv = document.querySelector('.data-div');

function setup() {
  currentlyReading = document.querySelectorAll('section')[0];
  active = true;
  topOffset = stickyNav.getBoundingClientRect().top;
}

setup();

const navItems = Array.from( document.querySelectorAll('.item') );
const sectionItems = Array.from( document.querySelectorAll('section') );

function updateDataDiv() {
  const { bottom, top, height } = getElHeight( currentlyReading );

  const dataTr = dataDiv.querySelector('tr.data');
  dataTr.innerHTML = '';
    const sectionNum = currentlyReading.querySelector('h2').textContent;
  [ sectionNum, bottom, (Math.abs(top)), topOffset, ( top - topOffset ) ].forEach( val => {
    const td = document.createElement(`td`);
    td.textContent = val;
    dataTr.appendChild( td );
  })
}

function getCurrentDiff( el ) {
  const { top } = getElHeight( el );
  return Math.abs( top ) - topOffset;
}

function getClosestSection() {
  return sectionItems.reduce( ( prev, curr ) => {
    const prevDiff = getCurrentDiff( prev );
    const currDiff = getCurrentDiff( curr );
    const isSmaller = currDiff <= prevDiff;
    return isSmaller ? curr : prev;

  });
}

function setNavItem( sectionNumber ) {
  navItems.forEach( navItem => {
    const match = navItem.dataset.item === sectionNumber;
    if ( match ) {
      navItem.classList.add('active');
    } else {
      navItem.classList.remove('active');
    }
  });
}

function draw() {
  updateDataDiv();
  const closest = getClosestSection();
  const sameElement = closest === currentlyReading;
  const withinBuffer = getCurrentDiff( closest ) <= bufferDistance;

  if ( !sameElement && withinBuffer ) {
    currentlyReading = closest;
    setNavItem( currentlyReading.dataset.section );
  }
}


function getElHeight( el ) {
  const absoluteRect = {};
  const rect = el.getBoundingClientRect();
  for ( var prop in rect ) {
    absoluteRect[ prop ] = Math.abs( rect[ prop ] );
  }
  return absoluteRect;
}

function tick() {
  if ( active ) {
    draw();
  }
  const ref = raf(tick);
}

tick();
