import React from 'react';
import config from '../../data/SiteConfig';

class AcademyLink extends React.Component {
  componentDidMount() {
    this.dataLayer = window.dataLayer || [];
  }

  handleClick = () => {
    this.dataLayer.push({
      event: 'customEvent',
      eventCategory: 'Academy Callout',
      eventAction: 'Click',
      eventLabel: 'Go to Course',
      eventValue: `${this.props.link}`,
    });
  }

  render() {
    // check for empty AcademyLink
    if (!this.props.children) {
      return null;
    }

    return (
      <div className="academy-callout">
        <div className="academy-callout__copy">
          {this.props.children.map(el => el)}
          <a
            href={this.props.link}
            onClick={this.handleClick}
          >
            GO TO COURSE →
          </a>
        </div>
        <div className="academy-callout__img" style={{ backgroundImage: `url(${config.envPrefix + this.props.img})` }} />
      </div>
    );
  }
}

export default AcademyLink;
