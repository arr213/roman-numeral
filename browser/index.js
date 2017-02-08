'use strict';

// NODE LIBRARIES
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// IMPORTED FILES
import AppContainer from './AppContainer';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
