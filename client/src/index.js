import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import HttpsRedirect from 'react-https-redirect';

import App from './components/App';

import './sass/main.scss';

// Measure and log the current FCP value,
// any time it's ready to be reported.

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then((reg) => {
      console.log('service worker has been registered', reg);
    })
    .catch((err) => {
      console.log('service worker not registered', err);
    });
}

ReactDOM.render(<App />, document.querySelector('#root'));
