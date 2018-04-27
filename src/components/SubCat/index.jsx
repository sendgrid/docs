import React from 'react';
import Link from 'gatsby-link';
import CATEGORIES from '../../constants/subCategories';

export default class subCategory extends React.Component {
  getSubCatDocs() {
    const docs = this.props.edges.map((edge) => {
      if (edge.node.frontmatter.subcategory === this.props.slug) {
        return <Link className="d-block" to={edge.node.fields.permalink} key={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>;
      }
      return null;
    });

    return docs;
  }

  render() {
    return (
      <div className="category-container">
        <h3>{CATEGORIES[this.props.slug]}</h3>
        {this.getSubCatDocs()}
      </div>
    );
  }
}

