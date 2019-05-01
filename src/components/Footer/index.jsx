import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-lg footer-container">
          <div className="footer-logo" />
          <ul>
            <li>
              <a href="https://sendgrid.com/about/" title="About">About</a>
            </li>
            <li>
              <a href="https://sendgrid.com/policies/tos/" title="Terms">Terms</a>
            </li>
            <li>
              Copyright {(new Date().getFullYear())} Twilio SendGrid
            </li>
            <li>
              All Rights Reserved
            </li>
            <li>
              <a href="https://sendgrid.com/" title="SendGrid.com">SendGrid.com</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
