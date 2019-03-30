import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    // const standardStyle = {
    //   float: 'right', fontSize:'1.5vw', paddingTop: '1.5%'
    // }
    return (
      <div id="header">
        <text style={{float: 'left', fontSize:'2vw', paddingTop: '1.5%'}}><strong>MyWebNow</strong></text>

          <div id="topbar-two">
            <text>Login</text>
            <button id='support-button'>Support</button>
          </div>
          <div id="topbar-one">
            <text>Contact Us</text>
            <text>Why Us</text>
            <text>Home</text>
          </div>
      </div>
    )
  }
}
