import React from 'react';
import SOCIAL_LINKS from '../../constants/socialLinks';

function SocialLinks() {
  const links = SOCIAL_LINKS.map(({URL, TEXTNODE, IMG}) => (
    <a href={URL} key={TEXTNODE} target="_blank" rel="noopener noreferrer">
      <img alt={TEXTNODE} src={IMG} />
      <span className="show-for-sr">{TEXTNODE}</span>
    </a>
  ));

  return (
    <div className="footer__soc">
      { links }
    </div>
  );
};

export default SocialLinks;
