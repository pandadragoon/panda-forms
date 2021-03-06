import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'babel-polyfill';

import {FormStore} from '../dist/panda-form.min.js';
import {info, required} from './data.js';

let formStore = new FormStore(info, required, 'MM/DD/YYYY');

ReactDOM.render(
  <App formStore={formStore} />,
  document.getElementById('app')
);
