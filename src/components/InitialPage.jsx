import React, { Component } from 'react'
import BackgroundImage from '../media/MyWebNow-Background.png'
import Header from './Header'
import Content from './InitialContent'
import LearnMore from './LearnMore'


export default class InitialPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <LearnMore />
        {/* <img src={BackgroundImage} alt="Background Photoshop" id="background-header"/> */}
      </div>
    )
  }
}
