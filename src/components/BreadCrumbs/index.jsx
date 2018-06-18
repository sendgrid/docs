import React, { Component } from 'react';
import Link from 'gatsby-link';
import _ from 'lodash';

export default class BreadCrumbs extends Component {
  constructor(props) {
    super(props);
    this.pathParts = this.getPathParts();

    this.state = {
      items: this.getBreadCrumbs(),
    };
  }

  getPathParts() {
    const { pathname } = this.props.location;
    const parts = pathname.split('/');
    return parts.filter(item => item.length);
  }

  getBreadCrumbs() {
    const isForDevsOrHelp = this.pathParts[0] === 'help-support' || this.pathParts[0] === 'for-developers';
    // Always add home
    const items = [
      {
        textNode: 'home',
        to: '/',
      },
    ];

    // check for help-support & for-developers
    // Only add if it's a nested page
    if (isForDevsOrHelp && this.pathParts.length > 1) {
      const { category } = this.props.data.doc.fields;

      items.push({
        textNode: this.pathParts[0].replace('-', ' '),
        to: `/${this.pathParts[0]}`,
      });

      items.push({
        textNode: category.replace('-', ' '),
        to: `/${this.pathParts[0]}/${category}`,
      });
    }


    return items;
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
