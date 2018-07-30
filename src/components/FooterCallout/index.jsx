import React from 'react';
import Link from 'gatsby-link';
import './FooterCallout.scss';

const FooterCallout = () => (

  <div className="footer-callout">
    <div className="footer-callout-pattern" />
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2 className="is-size-h1 color-white">For Developers</h2>
          <p className="color-slate-10">Integrate with SendGrid using our API or SMTP.</p>
          <Link className="btn btn-white" to="/for-developers/">View Developer Docs</Link>
        </div>
        <div className="col-md-6">
          <div className="card card--glossary">
            <h3 className="card__title">Quicklinks</h3>
            <Link className="glossary-link" to="/for-developers/sending-email/api-getting-started/">Getting Started</Link>
            <Link className="glossary-link" to="/api-v3/">API Documentation</Link>
            <Link className="glossary-link" to="/for-developers/sending-email/libraries/">Code Libraries</Link>
            <Link className="glossary-link" to="/help-support/account-and-settings/api-keys/">API Keys</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default FooterCallout;
