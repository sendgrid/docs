import React from 'react';
import marked from 'marked';

export default class Callout extends React.Component {
  render() {
    const classes = `callout callout-${this.props.type}`;
    return (
      <div className={classes}>
        <article
          dangerouslySetInnerHTML={{ __html: marked(this.props.children[0]) }}
        />
      </div>
    );
  }
}

Callout.defaultProps = {
  type: 'info',
};
