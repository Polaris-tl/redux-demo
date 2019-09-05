import React from 'react';
import ReactDom from 'react-dom';

import {Provider} from 'react-redux';
import App from './App.js';
import store from './redux/store.js';


ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
)