import React from 'react'
import Helmet from 'react-helmet'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import './b16-tomorrow-dark.css'
import './doc.scss'

import rehypeReact from 'rehype-react'
import Callout from '../componentsMarkdown/Callout'
import PageAnchor from '../componentsMarkdown/PageAnchor'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'call-out': Callout,
    'page-anchor': PageAnchor,
  },
}).Compiler

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext
    const postNode = this.props.data.markdownRemark
    const post = postNode.frontmatter
    if (!post.id) {
      post.id = slug
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID
    }
    return (
      <div className="container">
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div>
          <h1>{post.title}</h1>
          {/* <div dangerouslySetInnerHTML={{ __html: postNode.html }} /> */}
          {renderAst(postNode.htmlAst)}
        </div>
      </div>
    )
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
    }
  }
`
