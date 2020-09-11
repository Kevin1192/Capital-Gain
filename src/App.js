import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/default.css';
import './App.scss';
import CapitalGainForm from './components/CapitalGainForm';
import TopBar from './components/TopBar';
import Example from './components/Example';
import Section from './components/Section';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
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
        <TopBar />
        <Section />
        <Example />
        <CapitalGainForm />
      </Router>
    </React.Fragment>
  );
}
}

export default App;
