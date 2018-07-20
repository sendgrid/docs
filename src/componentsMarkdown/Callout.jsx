import React from 'react';

export default class Callout extends React.Component {
  render() {
    // check for emplty callout
    if (!this.props.children) {
      return null;
    }

    const classes = `callout callout--${this.props.type}`;
    return (
      <div className={classes}>
        {this.props.children.map(el => el)}
      </div>
    );
  }
}

Callout.defaultProps = {
  type: 'info',
};
