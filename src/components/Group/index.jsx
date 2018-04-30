import React from 'react';
import Link from 'gatsby-link';
import CATEGORIES from '../../constants/groups';

export default class Group extends React.Component {
  getSubCatDocs() {
    let docs = this.props.edges.filter(edge => edge.node.frontmatter.group === this.props.slug);

    docs = docs.map((edge) => {
      if (edge.node.frontmatter.group === this.props.slug) {
        return <Link className="d-block" to={edge.node.fields.permalink} key={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>;
      }
    });

    return docs.length ? docs : false;
  }

  render() {
    const catLinks = this.getSubCatDocs();

    if (!catLinks) {
      return null;
    }

    return (
      <div className="category-container col-md-6">
        <h3>{CATEGORIES[this.props.slug]}</h3>
        {catLinks}
      </div>
    );
  }
}

