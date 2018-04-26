import React from 'react';
import SubCat from '../components/SubCat';
import CATEGORIES from '../constants/categories';
import SUB_CATEGORIES from '../constants/subCategories';

export default class CategoryTemplate extends React.Component {
  renderSubCats() {
    const allSubCats = Object.keys(SUB_CATEGORIES).map(subCat => (
      <div key={subCat} className="col-md-6">
        <SubCat edges={this.props.data.allMarkdownRemark.edges} slug={subCat} />
      </div>
    ));

    return allSubCats;
  }

  render() {
    const { pathContext } = this.props;

    return (
      <div className="category-container container">
        <h1>{CATEGORIES[pathContext.category]}</h1>
        <div className="row">
          {this.renderSubCats()}
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
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            subcategory
          }
        }
      }
    }
  }
`;
