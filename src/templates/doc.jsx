import React from 'react';
import Helmet from 'react-helmet';
import RehypeReact from 'rehype-react';
import _ from 'lodash';
import SEO from '../components/SEO';
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
  getLinks() {
    const headers = this.props.data.markdownRemark.htmlAst.children.filter(el => el.type === 'element' && _.includes(['h2', 'h3'], el.tagName));
    return headers.map((header) => {
      const link = {};
      link.tagName = header.tagName;
      link.textNode = header.children[1].value;
      link.id = header.properties.id;
      return link;
    });
  }

  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    const asideLinks = this.getLinks();

    return (
      <div className="container-lg doc-wrap">
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <AsideMenu asideLinks={asideLinks} />
        <div className="doc-main">
          <h1>{post.title}</h1>
          {renderAst(postNode.htmlAst)}
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
