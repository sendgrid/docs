import React from 'react';
import GatsbyLink from 'gatsby-link';

const SendGridLink = ({ children, to, ...other }) => {
  console.log(window.location.hostname);
  const link = window.location.hostname.indexOf('sendgrid') !== -1 ? `/docs/${to}` : to;
  return (
    <GatsbyLink to={link} {...other} >
      {children}
    </GatsbyLink>
  );
};

export default SendGridLink;
