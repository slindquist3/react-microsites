
## Overview

This repository is for the quick deployment of Furthermore microsites and landing pages for our brand partnerships.

It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and has since been ejected from Create React App to use SCSS.

For help with React, please consult the Create React App docs.

You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

## Available Scripts
In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>

Only files inside `public` can be used from `public/index.html`.<br>

## Fonts and styling
All styling files can use the .scss file extension. When building, webpack will preprocess those files into regular CSS.
Brown, our brand font, has been imported. As our brand guide develops, this repository can be updated to match our default styling.

## React Router
For easy client-side routing, React Router has been added to this project and is wrapping the main app component. If your page doesn't require any navigation, you can edit the index.js file to remove the Router.
