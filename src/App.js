import React from 'react';
import './App.scss';
import CapitalGainForm from './components/CapitalGainForm';
import TopBar from './components/TopBar';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';



function App() {
  return (
    <React.Fragment>
    <Router>
<TopBar />
      <CapitalGainForm />
    </Router>
      
    </React.Fragment>
  );
}

export default App;
