import React, { Component } from 'react';
import Link from 'gatsby-link';
import _ from 'lodash';

class BreadCrumbs extends Component {
  constructor(props) {
    super(props);
    this.pathParts = this.getPathParts();

    this.state = {
      items: this.getSubPaths(),
    };
  }

  getPathParts() {
    const { pathname } = this.props.location;
    const parts = pathname.split('/');
    // We don't want "docs" or "UI" in the breadcrumbs
    return parts.filter(item => item.length && item !== 'docs');
  }

  getSubPaths() {
    const { pathname } = this.props.location;

    // No matter what, add and object that represents the docs home
    const home = [
      {
        textNode: 'home',
        to: '/',
      },
    ];

    const allPaths = this.pathParts.map((text) => {
      const path = pathname.substring(0, pathname.indexOf(text)) + text;
      const to = `${path.replace('/docs', '')}/`;
      const textNode = text === 'ui' ? 'User Interface' : text.replace(/-/g, ' ');
      return (
        {
          textNode,
          to,
        }
      );
    });

    this.allPaths = allPaths;

    // All paths but current page -- title is added in render method
    const subPaths = [...allPaths.slice(0, allPaths.length - 1)];

    // Combine with home object and return.
    return [...home, ...subPaths];
  }

  getTitle() {
    let pageTitle;
    const { data } = this.props;

    if (data && _.has(data[Object.keys(data)], 'fields')) {
      pageTitle = data[Object.keys(data)].fields.title;
    } else {
      pageTitle = this.pathParts.slice(-1)[0].replace(/-/g, ' ');
    }

    // update the last textNode with page title
    this.allPaths[this.allPaths.length - 1].textNode = pageTitle;

    return pageTitle;
  }

  getJSONLD() {
    const json = {
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [],
    };

    const itemList = this.allPaths.map((item, index) => {
      const listItem = {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@id': item.to,
          name: item.textNode,
        },
      };
      return listItem;
    });

    json.itemListElement = [...itemList];

    return json;
  }

  render() {
    return (
      <div>
        <ul className="breadcrumb">
          {this.state.items.map((item) => {
            const classes = `breadcrumb-item-${item.textNode.replace(' ', '-').toLowerCase()}`;
            return (
              <li key={item.textNode} className={classes} ><Link to={item.to}>{item.textNode}</Link></li>
            );
          })}
          <li dangerouslySetInnerHTML={{ __html: this.getTitle() }} />
        </ul>
        <script type="application/ld+json">
          {JSON.stringify(this.getJSONLD())}
        </script>
      </div>
    );
  }
}

export default BreadCrumbs;
