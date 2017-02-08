'use strict';

// NODE LIBRARIES
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// IMPORTED FILES
import AppContainer from './components/app/AppContainer';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
