import React from 'react';
import Group from '../components/Group';
import CATEGORIES from '../constants/categories';
import GROUPS from '../constants/groups';

export default class CategoryTemplate extends React.Component {
  renderGroups() {
    const allGroups = Object.keys(GROUPS).map(group => (
      <Group key={group} edges={this.props.data.allMarkdownRemark.edges} slug={group} />
    ));

    return allGroups;
  }

  render() {
    const { pathContext } = this.props;
    console.log(this);
    return (
      <div className="category-container container">
        <h1>{CATEGORIES[pathContext.category]}</h1>
        <div className="row">
          {this.renderGroups()}
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String, $docType: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { category: { eq: $category } }
        fields: {docType: {eq: $docType}}
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            docType
            slug
            permalink
          }
          frontmatter {
            title
            tags
            cover
            date
            group
          }
        }
      }
    }
  }
`;
