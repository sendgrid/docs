import React, { Component } from 'react';
import FOOTER_LINKS from '../../constants/footerLinks';
import SocialLinks from '../SocialLinks';
import './Footer.scss';

class Footer extends Component {
  static renderMenu(menu) {
    const links = menu.LINKS.map(({ URL, TEXTNODE }) => {
      if (URL) {
        return <a key={TEXTNODE} className={`footer__link footer__link--${TEXTNODE.replace(' ', '-').toLowerCase()}`} href={URL}>{TEXTNODE}</a>;
      }

      return <div key={TEXTNODE} className="footer__divider" />;
    });

    return (
      <div className="footer-col" key={menu.HEADER}>
        <div className="footer__header">{menu.HEADER}</div>
        { links }
      </div>
    );
  }

  render() {
    return (
      <footer className="footer color-white">
        <div className="container-lg footer-container">
          {Footer.renderMenu(FOOTER_LINKS.SOLUTIONS)}
          {Footer.renderMenu(FOOTER_LINKS.SG_IS_FOR)}
          {Footer.renderMenu(FOOTER_LINKS.SUPPORT)}
          {Footer.renderMenu(FOOTER_LINKS.COMMUNITY)}
          {Footer.renderMenu(FOOTER_LINKS.COMPANY)}
        </div>

        <hr />

        <div className="container-lg footer__soc-legal">
          <div className="row">
            <div className="col-md-6">
              <SocialLinks />
            </div>
            <div className="col-md-6 footer__legal">
              <a href="https://sendgrid.com/policies/tos/">Legal and Security</a>
              <span className="footer__copy">&copy; {(new Date().getFullYear())} SendGrid</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
