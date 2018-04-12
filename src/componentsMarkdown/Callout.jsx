import React from 'react'
import marked from 'marked'

export default class Callout extends React.Component {
  static defaultProps = {
    type: 'info',
  }

  render() {
    const classes = `callout callout-${this.props.type}`
    return (
      <div className={classes}>
        <article
          dangerouslySetInnerHTML={{ __html: marked(this.props.children[0]) }}
        />
      </div>
    )
  }
}
