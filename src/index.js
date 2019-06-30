import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { data } from './reducers/data';
import { initialState } from './reducers/data';
import * as serviceWorker from './serviceWorker';

import './styles/reset.css';
import './styles/normalize.css';
import './styles/index.css';

export function configureStore() {
  const store = createStore(data, initialState, applyMiddleware(thunk));
  return store;
}
export const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
