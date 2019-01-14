import React from 'react';
import config from '../../data/SiteConfig';

const dataLayer = window.dataLayer || [];

export default function AcademyLink(props) {
  // check for empty AcademyLink
  if (!props.children) {
    return null;
  }

  function handleClick() {
    dataLayer.push({
      event: 'customEvent',
      eventCategory: 'Academy Callout',
      eventAction: 'Click',
      eventLabel: 'Go to Course',
      eventValue: `${props.courselink}`,
    });
  }

  return (
    <div className="academy-callout">
      <div className="academy-callout__copy">
        {props.children.map(el => el)}
        <a
          href={props.courselink}
          onClick={handleClick}
        >
          GO TO COURSE →
        </a>
      </div>
      <div className="academy-callout__img" style={{ backgroundImage: `url(${config.envPrefix + props.img})` }} />
    </div>
  );
}
