import React from 'react';
import kebabCase from 'lodash/kebabCase';
import Link from 'gatsby-link';

export default class siteMap extends React.Component {
  render() {
    const {
      helpSupportCats,
      forDevsCats,
      pages,
      allDocs,
    } = this.props.data;


    return (
      <div className="container">
        <h1>Site Map</h1>
        <div className="m-bottom-4">
          <h3>Help Support Categories</h3>
          {helpSupportCats.group.map(cat => (
            <div key={cat.fieldValue}>
              <Link to={`/ui/${kebabCase(cat.fieldValue)}/`}>
                {cat.fieldValue} ({cat.totalCount})
              </Link>
            </div>
          ))}
        </div>
        <div className="m-bottom-4">
          <h3>For Developers Categories</h3>
          {forDevsCats.group.map(cat => (
            <div key={cat.fieldValue}>
              <Link to={`/for-developers/${kebabCase(cat.fieldValue)}/`}>
                {cat.fieldValue} ({cat.totalCount})
              </Link>
            </div>
          ))}
        </div>
        <div className="m-bottom-4">
          <h3>Pages</h3>
          {pages.edges.map(page => (
            <div key={page.node.id}>
              <Link to={page.node.path}>
                {page.node.id}
              </Link>
            </div>
          ))}
        </div>
        <div className="m-bottom-4">
          <h3>All Docs</h3>
          {allDocs.edges.map(doc => (
            <div key={doc.node.id} className="single-doc m-top-2 m-bottom-2">
              <div><strong>title:</strong> {doc.node.frontmatter.title}</div>
              <div><strong>SEO - meta title:</strong> {doc.node.frontmatter.seo && doc.node.frontmatter.seo.title }</div>
              <div><strong>SEO - meta description:</strong> {doc.node.frontmatter.seo && doc.node.frontmatter.seo.description }</div>
              <div><strong>uri: </strong><Link to={doc.node.fields.permalink}>{doc.node.fields.permalink} </Link></div>
              <div><strong>category: </strong>{doc.node.fields.category}</div>
              <div><strong>group: </strong>{doc.node.fields.group}</div>
              <div><strong>path: </strong>{doc.node.fileAbsolutePath}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query SiteMap {
    helpSupportCats: allMarkdownRemark(
      limit: 2000,
      filter: { fields: {docType: { eq: "ui" } } }
    ) {
      group(field: fields___category) {
        fieldValue
        totalCount
      }
    }
    forDevsCats: allMarkdownRemark(
      limit: 2000,
      filter: { fields: {docType: { eq: "for-developers" } } }
    ) {
      group(field: fields___category) {
        fieldValue
        totalCount
      }
    }
    pages: allSitePage(
      filter: {
        path: {regex:"/^((?!ui|for-developers\/[^/]+).)*$/"}
      }
    ) {
      edges {
        node {
          path
          id
        }
      }
    }
    allDocs: allMarkdownRemark(sort:{ fields: [fields___slug] }) {
      edges {
        node {
          fields {
            slug
            permalink
            docType
            category
            group
          }
          fileAbsolutePath
          id
          frontmatter {
            title
            seo {
              title
              description
              keywords
            }
          }
        }
      }
    }
  }
`;
