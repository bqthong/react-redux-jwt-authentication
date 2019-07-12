import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Component/Containers
 */
import App from './App'
import { authenticate } from './containers/LoginPage/LoginActions';

/**
 * Modules
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './configureStore';

import * as serviceWorker from './serviceWorker';

// Create redux store
const store = configureStore();

// Check if user token exists
const token = localStorage.getItem('token');
if (token) {
  store.dispatch(authenticate());
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
