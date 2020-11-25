import React, { Component } from 'react';
import { connect, Provider} from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/default.css';
import './App.scss';
import TopBar from './components/TopBar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


// pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';


const App = ({currentUser}) => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <TopBar />
           <Landing />
          </Route>
          {currentUser.isAuthenticated ? <Redirect to='/' /> : null}
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
const mapStateToProps = ({ currentUser }) => ({
  currentUser
})
export default connect(mapStateToProps)(App);
