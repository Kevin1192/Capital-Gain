import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/default.css';
import './App.scss';
import TopBar from './components/TopBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setTokenHeader } from './library/api';
import { UserContext } from './library/userContext';
import jwtDecode from 'jwt-decode';


// pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';


if (localStorage.jwtToken) {
  setTokenHeader(localStorage.jwtToken);

}

class App extends Component {
  constructor(props) {
    super(props);

    this.setCurrentUser =  (user) => {
      this.setState(state => ({
        ...state, 
        user: user,
        isauthenticated: !!Object.keys(user).length,
      }))
    }


    this.state = {
      isAuthenticated: false,
      user: {},
      setCurrentUser: this.setCurrentUser, 
    }
  }
  render() {
  return (
    <React.Fragment>
      <UserContext.Provider value={this.state}>
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
      </UserContext.Provider>
    </React.Fragment>
  );
}
}

export default App;
