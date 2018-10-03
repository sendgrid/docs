import React from 'react';
import SOCIAL_LINKS from '../../constants/socialLinks';

const SocialLinks = () => {
  const links = SOCIAL_LINKS.map(item => (
    <a href={item.URL} key={item.TEXTNODE} target="_blank" rel="noopener noreferrer">
      <img alt={item.TEXTNODE} src={item.IMG} />
      <span className="show-for-sr">{item.TEXTNODE}</span>
    </a>
  ));

  return (
    <div className="footer__soc">
      { links }
    </div>
  );
};

export default SocialLinks;
