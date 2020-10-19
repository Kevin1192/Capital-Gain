import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/default.css';
import './App.scss';
import TopBar from './components/TopBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
class App extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
    document.querySelector("table").addEventListener("scroll", this.scrollTable,true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
    document.querySelector("table").removeEventListener("scroll", this.scrollTable, true);
  }

  scrollTable = () => {
    let content = document.querySelector("tbody");
       content.style.width = document.querySelector("table").clientWidth +
      document.querySelector("table").scrollLeft + "px";
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    if (top > 80) {
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
    }
  }

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
