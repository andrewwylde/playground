# Playground/Testing Zone

This is really just a JS playground where I can do little tests like one could
on [codepen](http://codepen.io), except this feels a little bit better since I built it and that's
nifty.

## Features
* ES6 w/ babel
* Module bundling per page
* SCSS compiling
* Handlebars templating

## Setup
* run `npm install` to get all the dev dependencies
* run `npm run build` to generate the webpack bundles in the `dist/` directory
* run `npm start` to launch the `webpack-dev-server` and opens up `http://localhost:8080` to view the landing page


## Todo

- [ ] Make cli for adding page
- [x] Have the dev server open a new browser window by default
- [ ] Somehow have a pre-hook that clears out the `dist` directory and builds
- [ ] Better organization of files, I'm really not feeling this rn
- [ ] Make config more config-y, right now it returns functions and other weird shit
