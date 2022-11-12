import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import registerServiceWorker from 'react-service-worker';
import App from './App';

const appSW = registerServiceWorker();

ReactDOM.render(
  <HashRouter>
    <App appServiceWorker={appSW} />
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
