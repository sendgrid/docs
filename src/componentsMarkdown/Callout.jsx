import React from 'react';

export default class Callout extends React.Component {
  render() {
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
