import React from 'react';
import { graphql } from 'gatsby';
import RehypeReact from 'rehype-react';
import _ from 'lodash';
import config from '../../data/SiteConfig';
import SEO from '../components/SEO';
import AsideMenu from '../components/AsideMenu';
import CalloutLink from '../componentsMarkdown/CalloutLink';
import Callout from '../componentsMarkdown/Callout';
import Rating from '../components/Rating';
import Gist from '../componentsMarkdown/Gist';
import CodeGroup from '../componentsMarkdown/CodeGroup';
import withSubNav from '../components/NavSub';
import Layout from '../components/layout';
import './syntax-highlighting.scss';
import './doc.scss';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    gist: Gist,
    'call-out-link': CalloutLink,
    'call-out': Callout,
    'code-group': CodeGroup,
  },
}).Compiler;

class DocTemplate extends React.Component {
  getLinks() {
    const { data } = this.props;
    const headers = data.doc.htmlAst.children.filter(el => el.type === 'element' && _.includes(['h2', 'h3'], el.tagName));
    return headers.map((header) => {
      const link = {};
      link.tagName = header.tagName;
      link.textNode = header.children[1] ? header.children[1].value : '';
      link.id = header.properties.id;
      return link;
    });
  }

  getRepoLink() {
    const { data } = this.props;
    const {
      permalink,
    } = data.doc.fields;

    const absPath = data.doc.fileAbsolutePath;
    const filename = absPath.substring(absPath.lastIndexOf('/') + 1);
    const fileSlug = filename.replace('.md', '');
    const path = permalink.replace(`${fileSlug}/`, '');
    const gitHubURL = config.gitHubMarkdownPath + path + filename;

    return gitHubURL;
  }

  render() {
    const { data, location } = this.props;
    const postNode = data.doc;
    const asideLinks = this.getLinks();

    return (
      <Layout location={location} subNav={true}>
        <div className="container-lg doc-wrap">
          <SEO postNode={postNode} postType="doc" />
          {postNode.fields.docType !== 'glossary' && asideLinks.length
            ? (<AsideMenu asideLinks={this.getLinks()} />)
            : null
          }
          <div className="doc-main">
            <h1 dangerouslySetInnerHTML={{ __html: postNode.fields.title }} />
            {renderAst(postNode.htmlAst)}
            <Rating />
            <div className="edit-this-page m-top-4 ta-center">
              <strong>See a mistake?</strong>
              {' '}
              <a href={this.getRepoLink()}>Edit this page</a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default DocTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    doc: markdownRemark(id: { eq: $id } ) {
      htmlAst
      html
      fileAbsolutePath
      frontmatter {
        seo {
          title
          description
          keywords
        }
      }
      fields {
        slug
        title
        category
        docType
        permalink
      }
    }
  }
`;
