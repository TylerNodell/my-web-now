import React, { Component } from 'react'
// import { Textfit } from "react-textfit";

export default class InitialContent extends Component {

  clearfeild = () => {

  }

  render() {
    return (
      <div id="content">
        <div id='tagline'>
          <h1>Get a website in <br/> 15 minutes or less</h1>
        </div>
        <div>
          {/* <input type="text" name="name" id="text-input"/> */}
          <textarea name="domain" id="text-input" cols="30" rows="1">Write your domain name here...</textarea>
          <button id="search-button">Search</button>
        </div>
      </div>
    )
  }
}
