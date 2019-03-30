import React, { Component } from 'react'
import { Textfit } from "react-textfit";

export default class CreateYourAccount extends Component {
  render() {
    return (
      <div id="create-account">
        <div>
          <div id="create-account-text">
            <Textfit mode="multi">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Textfit>
          </div>
        </div>
        <div>
          <button id="create-account-button"><Textfit mode="single">CREATE YOUR ACCOUNT</Textfit></button>
        </div>
      </div>
    )
  }
}
