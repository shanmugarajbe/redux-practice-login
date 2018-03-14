import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { App } from './App';

import { configureFakeBackend } from './_helpers';
configureFakeBackend(); //I don't know what's this. Have to look into this functionality

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('app')
);
