import React from 'react';
import Link from 'gatsby-link';
import SEO from '../components/SEO';
import './glossary.scss';
import withSubNav from '../components/NavSub';

class glossary extends React.Component {
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
        <SEO postNode={this.props} title="Glossary" description="SendGrid documentation glossary" />
        <h1>Glossary</h1>
        <div className="row">
          {Object.keys(this.glossary).map(key => (
            <div key={key} className="col-md-6 glossary-alpha-section">
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

export default withSubNav()(glossary);

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
