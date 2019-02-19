import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<h1>Todo list</h1>, document.getElementById('container'));
});

