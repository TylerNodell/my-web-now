import React, { Component } from 'react'
import Arrow from '../media/down-arrow.png'

export default class LearnMore extends Component {
  render() {
    return (
      <div id="learn-more">
        <div id="learn-more-text">LEARN HOW WE CAN ENHANCE YOUR BUSINESS</div>
        <div id="learn-more-circle">
          <img id="learn-more-arrow" src={Arrow} alt="arrow"/>
        </div>
      </div>
    )
  }
}
