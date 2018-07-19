import React from 'react';

export default class Callout extends React.Component {
  render() {
    const classes = `callout callout--${this.props.type}`;
    // const data = this.props.children.filter((el) => {
    //   console.log(el.length);
    //   return el.length;
    // });
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
