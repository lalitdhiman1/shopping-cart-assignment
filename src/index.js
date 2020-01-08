/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/store';

import "./main.scss";
import Header from './Components/Header';
import Footer from './Components/Footer';
import routes from './routes';



ReactDOM.render(
  (
    <Provider store={store}>
     
      <BrowserRouter>
        {routes}
        <Footer />
      </BrowserRouter>
      
    </Provider>
  ), document.getElementById('root'),
);
