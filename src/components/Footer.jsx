import React, { Component } from 'react'
import phone from '../media/phone.png'
import mail from '../media/mail.png'
import location from '../media/location.png'
import facebook from '../media/facebook.png'
import youtube from '../media/youtube.png'
import twitter from '../media/twitter.png'

export default class Footer extends Component {
  render() {
    const mailStyle = {
      margin: '2vw auto'
    }
    return (
      <div id="footer-container">
        <div className="footer-row">
          <div className="flex-footer-item">
            <div className='icons'>
              <img src={phone} alt="phone" className="footer-thumbnail"/>
              <img style={{margin: '2vw auto'}} src={mail} alt="mail" className="footer-thumbnail"/>
              <img src={location} alt="location" className="footer-thumbnail"/>
            </div>
            <div id='contact-info'>
              <div style={{margin: '1vw auto', fontWeight: 'bold', color: 'white'}}>+1 800 WEBSITE</div>
              <div style={{margin: '2.5vw auto'}}>hello@mywebnow.com</div>
              <div>1 Main Street <br/>Floor 6,<br/>New York, NY 10005</div>
            </div>
          </div>
          <div className="flex-footer-item">
            <div className="footer-main">
              <div className="footer-first">Company</div>
              <div>About Us</div>
              <div>News</div>
              <div>FAQ</div>
              <div>Contact Us</div>
            </div>
          </div>
          <div className="flex-footer-item">
            <div className="footer-main">
              <div className="footer-first">Services</div>
              <div>Web Hosting</div>
              <div>Cloud Hosting</div>
              <div>VPS Servers</div>
              <div>Domain Names</div>
              </div>
          </div>
          <div className="flex-footer-item">
            <div className="footer-main">
              <div className="footer-first">Others</div>
              <div>Transfer Domains</div>
              <div>Customer Portal</div>
              <div>Support Portal</div>
              <div>Video Tutorials</div>
            </div>
          </div>
          <div className="flex-footer-item">
            <div className="icons">
            <img src={facebook} alt="facebook" className="footer-social-media"/>
            <img src={youtube} alt="youtube" className="footer-social-media"/>
            <img src={twitter} alt="twitter" className="footer-social-media"/>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}
