import React, { Component } from 'react';
import './App.css';
import InitialPage from './components/InitialPage.jsx'
import CreateAccount from './components/CreateYourAccount'
import OurServices from './components/OurServices'
import AreYouReady from './components/AreYouReady';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          
          <InitialPage/>
          <CreateAccount/>
          <OurServices/>
          <AreYouReady/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
