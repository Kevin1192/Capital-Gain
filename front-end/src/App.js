import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/default.css';
import './App.scss';
import TopBar from './components/TopBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setTokenHeader } from './library/api';
import jwtDecode from 'jwt-decode';


// pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';


if (localStorage.jwtToken) {
  setTokenHeader(localStorage.jwtToken);

  


}

class App extends Component {

  render() {
  return (
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
  );
}
}

export default App;
