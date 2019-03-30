import React, { Component } from 'react'
import GridContent from './GridContent';

export default class OurServices extends Component {
  render() {
    const textHeader = {
      fontSize: '2.3vw'
    }
    return (
      <div style={{margin: "auto"}}>
        <div style={textHeader} >Our Services</div>
        <div id='line'></div>
        <div className="container">
          <div className="grid-row">
            <div className="grid-item">
              <div className="grid-content">
                <GridContent text="WEB HOSTING" />
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-content">
                <GridContent text="RESELLERS" />                
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-content">
                <GridContent text="VPS HOSTING" />
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-content">
                <GridContent text="CLOUD HOSTING" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
