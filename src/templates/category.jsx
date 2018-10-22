import React from 'react';
import _ from 'lodash';
import Group from '../components/Group';
import CATEGORIES from '../constants/categories';
import SEO from '../components/SEO';
import GROUPS from '../constants/groups';
import withSubNav from '../components/NavSub';
import './category.scss';

class CategoryTemplate extends React.Component {
  static sortGroups(groupEdges) {
    const groupsEdgesWithOrder = groupEdges.map((edge) => {
      const order = GROUPS[edge.fieldValue] ? GROUPS[edge.fieldValue].order : null;
      return { ...edge, order };
    });

    const groupEdgesSorted = _.sortBy(groupsEdgesWithOrder, ['order', 'name']);
    return groupEdgesSorted;
  }

  renderGroups() {
    const sortedGroups = CategoryTemplate.sortGroups(this.props.data.docs.group);

    return sortedGroups.map((group) => {
      const title = GROUPS[group.fieldValue] ? GROUPS[group.fieldValue].name : group.fieldValue;
      return (
        <div key={group.fieldValue} className="category-container col-md-6">
          <h2>{title}</h2>
          <Group edges={group.edges} />
        </div>
      );
    });
  }

  render() {
    const { category } = this.props.pathContext;
    // If we don't have a "pretty category", make one out of the category context.
    const title = CATEGORIES[category] ? CATEGORIES[category] : category.replace(/-/g, ' ');

    return (
      <div className="category-container container">
        <SEO postNode={this.props} postType="category" />
        <h1 className="page-title">{title}</h1>
        <div className="row">
          {this.renderGroups()}
        </div>
      </div>
    );
  }
}

export default withSubNav()(CategoryTemplate);

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
            frontmatter {
              navigation {
                show
              }
            }
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
