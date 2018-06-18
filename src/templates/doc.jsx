import React from 'react';
import Helmet from 'react-helmet';
import RehypeReact from 'rehype-react';
import _ from 'lodash';
import SEO from '../components/SEO';
import AsideMenu from '../components/AsideMenu';
import config from '../../data/SiteConfig';
import Callout from '../componentsMarkdown/Callout';
import CodeGroup from '../componentsMarkdown/CodeGroup';
import withSubNav from '../components/NavSub';
import './b16-tomorrow-dark.css';
import './doc.scss';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    'call-out': Callout,
    'code-group': CodeGroup,
  },
}).Compiler;

class DocTemplate extends React.Component {
  getLinks() {
    const headers = this.props.data.doc.htmlAst.children.filter(el => el.type === 'element' && _.includes(['h2', 'h3'], el.tagName));
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
    const postNode = this.props.data.doc;
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
          <h1 className="page-title">{post.title}</h1>
          {renderAst(postNode.htmlAst)}
        </div>
      </div>
    );
  }
}

export default withSubNav()(DocTemplate);

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    doc: markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      html
      frontmatter {
        title
      }
      fields {
        slug
        title
        category
      }
    }
  }
`;
