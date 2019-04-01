import React from 'react';

class Rating extends React.Component {
  componentDidMount() {
    this.dataLayer = window.dataLayer || [];
  }

  rateDoc = () => {
    // If it's an academy link, push event to datalayer.
    if (this.props.link.includes('rise.articulate.com')) {
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
    // check for empty Rating
    if (!this.props.children) {
      return null;
    }

    const linkText = this.props.linktext || 'Read More';

    return (
      <div className="callout-link">

      </div>
    );
  }
}

export default Rating;