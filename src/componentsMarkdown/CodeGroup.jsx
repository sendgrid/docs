import React from 'react';
import _ from 'lodash';

export default class CodeGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: false,
    };
  }

  getLangs() {
    const langs = [];

    _.forEach(this.props.children, (val) => {
      if (_.isObject(val)) {
        _.forEach(val.props.children, (subEl) => {
          if (_.isObject(subEl)) {
            langs.push(subEl.props.className.replace('language-', ''));
          }
        });
      }
    });

    return langs;
  }

  renderCodeBlocks() {
    // Remove empty strings from array
    const codeBlocks = this.props.children.filter(block => _.isObject(block));

    // return code blocks wrapped parent element
    return codeBlocks.map(block => <div className="tabbed-code_block">{block}</div>);
  }

  render() {
    const langs = this.getLangs();


    return (

      <div className="tabbed-code">
        {/* {langs.map(lang => <span claName="tabbed-code_tab">{lang}</span>)} */}
        {/* {this.renderCodeBlocks()} */}
      </div>

    );
  }
}
