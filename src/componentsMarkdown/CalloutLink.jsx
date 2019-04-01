import React from 'react';
import config from '../../data/SiteConfig';

class CalloutLink extends React.Component {
  componentDidMount() {
    this.dataLayer = window.dataLayer || [];
  }

  handleClick = () => {
    // If it's an academy link, push event to datalayer.
    if (this.props.link.includes('rise.articulate.com')) {
      console.log('track');
      this.dataLayer.push({
        event: 'customEvent',
        eventCategory: 'Academy Callout',
        eventAction: 'Click',
        eventLabel: 'Go to Course',
        eventValue: `${this.props.link}`,
      });
    }
  }

  render() {
    // check for empty CalloutLink
    if (!this.props.children) {
      return null;
    }

    const linkText = this.props.linktext || 'Read More';

    return (
      <div className="callout-link">
        <div className="callout-link__copy">
          {this.props.children.map(el => el)}
          <a
            href={this.props.link}
            onClick={this.handleClick}
          >
            { linkText } →
          </a>
        </div>
        <div className="callout-link__img" style={{ backgroundImage: `url(${config.envPrefix + this.props.img})` }} />
      </div>
    );
  }
}

export default CalloutLink;
