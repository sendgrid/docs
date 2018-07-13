import React from 'react';
import Link from 'gatsby-link';
import SEO from '../components/SEO';
import './glossary.scss';

class glossary extends React.Component {
  render() {
    return (
      <div className="container">
        api v3
        <iframe src="https://sendgrid.api-docs.io/v3.0/mail-send/v3-mail-send" frameBorder="0" />
      </div>
    );
  }
}

export default glossary;
