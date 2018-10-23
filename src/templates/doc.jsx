import React from 'react';
import RehypeReact from 'rehype-react';
import _ from 'lodash';
import config from '../../data/SiteConfig';
import SEO from '../components/SEO';
import AsideMenu from '../components/AsideMenu';
import Callout from '../componentsMarkdown/Callout';
import Gist from '../componentsMarkdown/Gist';
import CodeGroup from '../componentsMarkdown/CodeGroup';
import withSubNav from '../components/NavSub';
import './syntax-highlighting.scss';
import './doc.scss';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    gist: Gist,
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
      link.textNode = header.children[1] ? header.children[1].value : '';
      link.id = header.properties.id;
      return link;
    });
  }

  getRepoLink() {
    const {
      permalink,
      slug,
    } = this.props.data.doc.fields;
    const path = permalink.replace(`${slug}/`, '');
    const absPath = this.props.data.doc.fileAbsolutePath;
    const filename = absPath.substring(absPath.lastIndexOf('/') + 1);
    const gitHubURL = config.gitHubMarkdownPath + path + filename;
    return gitHubURL;
  }

  render() {
    const postNode = this.props.data.doc;
    const asideLinks = this.getLinks();

    return (
      <div className="container-lg doc-wrap">
        <SEO postNode={postNode} postType="doc" />
        {postNode.fields.docType !== 'glossary' && asideLinks.length ?
         (<AsideMenu asideLinks={this.getLinks()} />)
         : null
        }
        <div className="doc-main">
          <h1 dangerouslySetInnerHTML={{ __html: postNode.fields.title }} />
          {renderAst(postNode.htmlAst)}
          <div className="card card__feedback">
            <div className="card__inner">
              <h3 className="card__title" >Feedback</h3>
              <p>If you have a question that needs an answer, please <a href="https://support.sendgrid.com" title="contact support" target="_blank" rel="noopener noreferrer">contact support</a>.
                Otherwise, please <a href="https://github.com/sendgrid/docs/issues/new" title="open an issue in our GitHub" target="_blank" rel="noopener noreferrer">open an issue in our GitHub</a>!
                Thanks for helping us improve our docs!
              </p>
            </div>
          </div>
          <div className="edit-this-page m-top-4 ta-center"><strong>See a mistake?</strong> <a href={this.getRepoLink()}>Edit this page</a></div>
        </div>
      </div>
    );
  }
}

export default withSubNav()(DocTemplate);

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
