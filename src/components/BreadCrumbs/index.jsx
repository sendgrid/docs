import React, { Component } from 'react';
import Link from 'gatsby-link';
import _ from 'lodash';
import { all } from 'rsvp';

export default class BreadCrumbs extends Component {
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
    return parts.filter(item => item.length);
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

    const allPaths = this.pathParts.map((textNode) => {
      const to = pathname.substring(0, pathname.indexOf(textNode)) + textNode;
      return (
        {
          textNode,
          to,
        }
      );
    });

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
      pageTitle = this.pathParts.slice(-1)[0].replace('-', ' ');
    }

    return pageTitle;
  }

  render() {
    return (
      <ul className="breadcrumb">
        {this.state.items.map(item => (
          <li key={item.textNode} ><Link to={item.to}>{item.textNode}</Link></li>
        ))}
        <li>{this.getTitle()}</li>
      </ul>
    );
  }
}
