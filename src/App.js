import React from 'react';
import './App.scss';
import CapitalGainForm from './components/CapitalGainForm';
import TopBar from './components/TopBar';




function App() {
  return (
    <React.Fragment>
      <TopBar />
      <CapitalGainForm />
    </React.Fragment>
  );
}

export default App;
