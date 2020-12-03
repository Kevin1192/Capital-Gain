import React, { Component, Fragment } from 'react';
import CapitalGainForm from '../components/CapitalGainForm';
import Example from '../components/Example';
import Section from '../components/Section';

class Landing extends Component {
    
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
        <Fragment>
            <Section />
            <Example />
            <CapitalGainForm />
        </Fragment>
    )
}
}

export default Landing;