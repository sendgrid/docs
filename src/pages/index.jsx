import React from 'react'
import Helmet from 'react-helmet'
import PostListing from '../components/PostListing/PostListing'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <div className="container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <div className="search-hero">
          <h1>Get Help Using SendGrid</h1>
          <div className="input-text-wrap">
            <label
              className="input-text-label"
              for="input-text-example-default"
            >
              Username
            </label>
            <input type="text" id="input-text-example-default" />
          </div>
        </div>
      </div>
    )
  }
}

export default Index

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            permalink
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
