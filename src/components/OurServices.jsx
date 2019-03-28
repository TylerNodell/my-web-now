import React, { Component } from 'react'

export default class OurServices extends Component {
  render() {
    return (
      <div>
        <text>Our Services</text>
        {/* line */}
        <div className="container">
          <div className="grid-row">
            <div className="grid-item">
              <div className="grid-content">
                <div className="grid-image">Image</div>
                <div className="grid-text-container">
                  <div className="grid-text-header">WEB HOSTING →	</div>
                  <div className="grid-text-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-content">
                <div className="grid-image">Image</div>
              </div>
            </div>
            <div className="grid-item">
            <div className="grid-content"></div>
            </div>
            <div className="grid-item">
            <div className="grid-content"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
