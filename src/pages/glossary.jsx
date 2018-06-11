import React from 'react';
import kebabCase from 'lodash/kebabCase';
import Link from 'gatsby-link';
import './glossary.scss';

export default class glossary extends React.Component {
  constructor(props) {
    super(props);
    this.glossary = this.alphaEdges();
  }

  alphaEdges() {
    const { edges } = this.props.data.glossary;
    const groupedEdges = {};

    edges.forEach((edge) => {
      const sortChar = edge.node.fields.title.slice(0, 1);

      if (sortChar in groupedEdges) {
        groupedEdges[sortChar].push(edge);
      } else {
        groupedEdges[sortChar] = [edge];
      }
    });

    return groupedEdges;
  }

  render() {
    return (
      <div className="container">
        <h1>Glossary</h1>
        <div className="row">
          {Object.keys(this.glossary).map(key => (
            <div className="col-md-6 glossary-alpha-section">
              <h3>{key}</h3>
              {this.glossary[key].map(edge => (
                <Link
                  key={edge.node.fields.title}
                  to={edge.node.fields.permalink}
                >
                  {edge.node.fields.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query glossary {
    glossary: allMarkdownRemark(
      limit: 2000,
      filter: { fields: {docType: { eq: "glossary" } } },
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
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
`;
