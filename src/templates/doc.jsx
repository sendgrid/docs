import React from 'react';
import Helmet from 'react-helmet';
import RehypeReact from 'rehype-react';
import SEO from '../components/SEO';
import NavSub from '../components/NavSub';
import config from '../../data/SiteConfig';
import './b16-tomorrow-dark.css';
import './doc.scss';

import Callout from '../componentsMarkdown/Callout';
import PageAnchor from '../componentsMarkdown/PageAnchor';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    'call-out': Callout,
    'page-anchor': PageAnchor,
  },
}).Compiler;

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <div className="docs-main">
        <NavSub />
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
      </div>
    );
  }
}

/* eslint no-undef: "off" */
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
`;
