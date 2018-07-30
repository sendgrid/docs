/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from 'react';
// import favicon from './favicon.png'
import './test.css';

let inlinedStyles = '';
if (process.env.NODE_ENV === 'production') {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require('!raw-loader!../public/styles.css');
  } catch (e) {
    /* eslint no-console: "off" */
    console.log(e);
  }
}

export default class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      );
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="preload"
            href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
            as="script"
          />
          <link
            rel="preload"
            href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
            as="style"
          />
          <script src="//cdn.optimizely.com/js/72168671.js" />
          <script
            src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
          />
          {this.props.headComponents}

          <link rel="shortcut icon" type="image/x-icon" href="https://sendgrid.com/brand/favicons/favicon.ico" />
          <link rel="apple-touch-icon" sizes="57x57" href="https://sendgrid.com/brand/favicons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="https://sendgrid.com/brand/favicons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="https://sendgrid.com/brand/favicons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="https://sendgrid.com/brand/favicons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="https://sendgrid.com/brand/favicons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="https://sendgrid.com/brand/favicons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="https://sendgrid.com/brand/favicons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="https://sendgrid.com/brand/favicons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="https://sendgrid.com/brand/favicons/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="https://sendgrid.com/brand/favicons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="https://sendgrid.com/brand/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="https://sendgrid.com/brand/favicons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="https://sendgrid.com/brand/favicons/favicon-16x16.png" />
          <link rel="manifest" href="https://sendgrid.com/brand/favicons/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="https://sendgrid.com/brand/favicons/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />


          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
