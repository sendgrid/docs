import React from 'react';

export default function Callout(props) {
    // check for empty callout
    if (!props.children) {
      return null;
    }

    const classes = `callout callout--${props.type}`;
  
    return (
      <div className={classes}>
        {props.children.map(el => el)}
      </div>
    );
}

Callout.defaultProps = {
  type: 'info',
};
