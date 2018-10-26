import React, { Component } from 'react';
import _ from 'lodash';

class AsideMenu extends Component {
  constructor(props) {
    super(props);

    this.scrollSpy = this.scrollSpy.bind(this);
    // Scrollspy will highlight next section when header is 100 pixels from top of browser chrome.
    this.scrollSpyOffset = 100;

    this.state = {
      activeNavItem: false,
      pageType: this.props.pageType || false,
    };
  }

  componentDidMount() {
    this.scrollSpy();
    window.addEventListener('scroll', this.scrollSpy);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollSpy);
  }

  scrollSpy() {
    const selector = this.state.pageType === 'release-notes' ? 'h2 .anchor' : 'h2 .anchor, h3 .anchor';
    const headers = Array.from(document.querySelectorAll(selector));

    // headers with offset
    const headersOffset = headers.map((el, i) => {
      const { slug } = el.dataset;
      let nextEl;

      // Offset for a given section is the NEXT header.
      if ((headers.length - 1) !== i) {
        nextEl = headers[i + 1].getBoundingClientRect().top;
      } else {
        nextEl = headers[i].getBoundingClientRect().top + 9000;
      }

      const offset = (nextEl + document.body.scrollTop) - this.scrollSpyOffset;
      return { slug, offset };
    });


    // Headers with postive scrolltop value
    const headersScrollTop = headersOffset.filter(el => el.offset > 0);

    this.setState({ activeNavItem: headersScrollTop[0] });
  }

  render() {
    const navItems = this.props.asideLinks;

    return (
      <aside className="aside-nav">
        <div className="aside-nav__title is-size-h5">In the article</div>
        {navItems.map(el => {
            const {
              id,
              textNode,
            } = el;
            let classes = `doc-header ${el.tagName}`;

            if (el.id === this.state.activeNavItem.slug) {
              classes += ' active';
            }

            return <a key={id} className={classes} href={`#${id}`}>{textNode}</a>;
        })}
      </aside>
    );
  }
}

export default AsideMenu; 
