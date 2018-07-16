import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'emotion';

injectGlobal`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  ul {
    margin: 0;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-width: 20rem;
    overflow-x: hidden;
  }

  body {    
    background: linear-gradient(#2c3e50 50%, #3498db);
  }
`
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root'));
registerServiceWorker();
