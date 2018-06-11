import React from 'react';
import Group from '../components/Group';
import CATEGORIES from '../constants/categories';
import GROUPS from '../constants/groups';
import NavSub from '../components/NavSub';
import './category.scss';

export default class CategoryTemplate extends React.Component {
  renderGroups() {
    return this.props.data.docs.group.map(group => (
      <div key={group.fieldValue} className="category-container col-md-6">
        <h2>{GROUPS[group.fieldValue]}</h2>
        <Group edges={group.edges} />
      </div>
    ));
  }

  render() {
    const { pathContext } = this.props;
    console.log(this.props);
    return (
      <div>
        <NavSub />
        <div className="category-container container">
          <h1>{CATEGORIES[pathContext.category]}</h1>
          <div className="row">
            {this.renderGroups()}
          </div>
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String, $docType: String) {
    docs: allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___title], order: ASC }
      filter: {
        fields: {
          docType: {eq: $docType}
          category: {eq: $category}
        }
      }
    ) {
    group(field: fields___group){
        totalCount
        fieldValue
        edges {
          node {
            fields {
              docType
              slug
              permalink
              category
              title
            }
          }
        }
      }
    }
  }
`;
