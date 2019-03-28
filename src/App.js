import React, { Component } from 'react';
import './App.css';
import InitialPage from './components/InitialPage.jsx'
import CreateAccount from './components/CreateYourAccount'
import OurServices from './components/OurServices'

class App extends Component {
  render() {
    return (
      <div className="App">
        <InitialPage/>
        <CreateAccount/>
        <OurServices/>
      </div>
    );
  }
}

export default App;
