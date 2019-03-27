import React, { Component } from 'react'
import BackgroundImage from '../media/MyWebNow-Background.png'
import Header from './Header'
import Content from './InitialContent'


export default class InitialPage extends Component {
  render() {
    return (
      <div style={{zIndex: '0',overflowX: 'hidden'}}>
        <Header />
        <Content />
        
        <img src={BackgroundImage} alt="Background Photoshop" id="background-header"/>
      </div>
    )
  }
}
