import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter'
import './main.scss';
import App from './components/App.js';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);