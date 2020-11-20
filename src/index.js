import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import Rtl from './theme'
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss'

ReactDOM.render(
  <Rtl>
    <BrowserRouter >
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </BrowserRouter>
  </Rtl>,
  document.querySelector('#root'),
);
