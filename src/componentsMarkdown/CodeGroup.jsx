import React from 'react';
import _ from 'lodash';

export default class CodeGroup extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLang = this.toggleLang.bind(this);
    this.langs = this.props.langs.split(',');

    this.state = {
      currentTab: this.langs[0].toLowerCase(),
    };
  }

  toggleLang(e) {
    this.setState({
      currentTab: e.target.dataset.lang,
    });
  }

  renderTabs() {
    const { langs } = this;
    const { currentTab } = this.state;

    const tabs = langs.map((lang) => {
      const isActive = lang.toLowerCase() === currentTab ? 'is-active' : null;
      const classes = `tab ${isActive}`;

      return <li key={lang} className={classes} data-lang={lang.toLowerCase()} onClick={this.toggleLang} onKeyDown={this.handleClick} role="button">{lang}</li>;
    });

    return tabs;
  }

  renderCodeBlocks() {
    const { langs } = this;
    const { currentTab } = this.state;
    // Remove empty strings from array
    const codeBlocks = this.props.children.filter(block => _.isObject(block));

    // return code blocks wrapped parent element
    return codeBlocks.map((block, i) => {
      const lang = langs[i].toLowerCase();
      let classes = `tabbed-code__block ${lang}`;

      if (lang === currentTab) {
        classes = classes.concat(' show');
      }

      return <div key={block.key} className={classes} >{block}</div>;
    });
  }

  render() {
    return (
      <div className="tabbed-code">
        <ul className="tab-wrapper is-editor">
          {this.renderTabs()}
        </ul>
        {this.renderCodeBlocks()}
      </div>
    );
  }
}
