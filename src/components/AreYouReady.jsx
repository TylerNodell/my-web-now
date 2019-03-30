import React, { Component } from 'react'
import { Textfit } from 'react-textfit';

export default class AreYouReady extends Component {
  render() {
    return (
      <div id="ready">
        <Textfit mode="multi" id="ready-text">
          Are you ready? <br/> <strong>Create an account, or contact us.</strong>
        </Textfit>
        <div id="ready-buttons">
            <div className='rbutton' id="create">CREATE YOUR ACCOUNT</div>
            <div className='rbutton' id="contact">CONTACT US</div>
        </div>
      </div>
    )
  }
}
