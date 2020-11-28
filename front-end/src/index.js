import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { setCurrentUser } from './store/actions/auth';
import JwtDecode from 'jwt-decode';
import { setTokenHeader } from './library/api';
import { removeError } from './store/actions/errors';


const store = configureStore();

if (localStorage.jwtToken) {
  store.dispatch(removeError());
  setTokenHeader(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(JwtDecode(localStorage.jwtToken)))
  } catch (err) {
    store.dispatch(setCurrentUser({}));
  }
} 


ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
