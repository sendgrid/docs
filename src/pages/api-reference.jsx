import React from 'react';
import './api-reference.scss';
import Layout from '../components/layout';

function stopLight({ location }) {
  return (
    <Layout location={location}>
      <div className="container container-stoplight">
        <div className="iframe-container">
          <iframe width="1500" height="1000" title="SendGrid V3 API" src="https://sendgrid.api-docs.io/v3.0/mail-send/v3-mail-send" frameBorder="0" />
        </div>
      </div>
    </Layout>
  );
}

export default stopLight;
