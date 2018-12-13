import React from 'react';
import config from '../../data/SiteConfig';

export default function AcademyLink(props) {
  // check for empty AcademyLink
  if (!props.children) {
    return null;
  }

  return (
    <div className="academy-callout">
      <div className="academy-callout__copy">
        {props.children.map(el => el)}
        <a href={props.courselink}>GO TO COURSE →</a>
      </div>
      <div className="academy-callout__img" style={{ backgroundImage: `url(${config.envPrefix + props.img})` }} />
    </div>
  );
}
