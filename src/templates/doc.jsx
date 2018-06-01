import React from 'react';
import Helmet from 'react-helmet';
import RehypeReact from 'rehype-react';
import _ from 'lodash';
import SEO from '../components/SEO';
import NavSub from '../components/NavSub';
import AsideMenu from '../components/AsideMenu';
import config from '../../data/SiteConfig';
import './b16-tomorrow-dark.css';
import './doc.scss';

import Callout from '../componentsMarkdown/Callout';
import CodeGroup from '../componentsMarkdown/CodeGroup';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    'call-out': Callout,
    'code-group': CodeGroup,
  },
}).Compiler;

export default class DocTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;

    return (
      <div>
        <NavSub />
        <div className="container-lg doc-wrap">
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <AsideMenu htmlAst={postNode.htmlAst} />
          <div className="doc-main">
            <h1>{post.title}</h1>
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
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;
