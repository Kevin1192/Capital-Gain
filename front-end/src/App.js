import React, { Component } from 'react';
import { Provider} from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/default.css';
import './App.scss';
import TopBar from './components/TopBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setTokenHeader } from './library/api';
import { setCurrentUser } from './store/actions/auth';
import { configureStore } from './store/index';
import jwtDecode from 'jwt-decode';


// pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';


const store = configureStore();

if (localStorage.jwtToken) {
  setTokenHeader(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
  } catch (err) {
    store.dispatch(setCurrentUser({}));
  }
} 

class App extends Component {

  render() {
  return (
    <Provider store={store}>
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <TopBar />
           <Landing />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
    </Provider>
  );
}
}

export default App;
