import React, { Component } from 'react';
import Link from 'gatsby-link';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-lg footer-container">
          <div className="footer-col">
            <div className="footer_header">Solutions</div>
          </div>
          <div className="footer-col">
            <div className="footer_header">SendGrid is For</div>
          </div>
          <div className="footer-col">
            <div className="footer_header">Support</div>
          </div>
          <div className="footer-col">
            <div className="footer_header">Community</div>
          </div>
          <div className="footer-col">
            <div className="footer_header">Company</div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
