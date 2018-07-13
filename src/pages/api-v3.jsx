import React from 'react';
import './api-v3.scss';

class stopLight extends React.Component {
  render() {
    return (
      <div className="container container-stoplight">
        <div className="iframe-container">
          <iframe width="1500" height="1000" title="SendGrid V3 API" src="https://sendgrid.api-docs.io/v3.0/mail-send/v3-mail-send" frameBorder="0" />
        </div>
      </div>
    );
  }
}

export default stopLight;
