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
          <p className="color-slate-10">Integrate with SendGrid using our API or SMTP. Lorem ipsum dollor sit amer.</p>
          <Link className="btn btn-white" to="/">View Developer Docs</Link>
        </div>
        <div className="col-md-6">
          <div className="card card--glossary is-thin">
            <h3 className="card__title">Quicklinks</h3>
            <Link className="glossary-link" to="/">Getting Started</Link>
            <Link className="glossary-link" to="/">API Documentation</Link>
            <Link className="glossary-link" to="/">Code Libraries</Link>
            <Link className="glossary-link" to="/">API Keys</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default FooterCallout;
