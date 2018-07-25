import React from 'react';
import RehypeReact from 'rehype-react';
import _ from 'lodash';
import SEO from '../components/SEO';
import AsideMenu from '../components/AsideMenu';
import Callout from '../componentsMarkdown/Callout';
import Gist from '../componentsMarkdown/Gist';
import CodeGroup from '../componentsMarkdown/CodeGroup';
import withSubNav from '../components/NavSub';
import './syntax.scss';
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

  render() {
    const postNode = this.props.data.doc;
    const asideLinks = this.getLinks();
    console.log(asideLinks);

    return (
      <div className="container-lg doc-wrap">
        <SEO postNode={postNode} postType="doc" />
        {postNode.fields.docType !== 'glossary' && asideLinks.length ?
         (<AsideMenu asideLinks={this.getLinks()} />)
         : null
        }
        <div className="doc-main">
          <h1 className="page-title">{postNode.fields.title}</h1>
          {renderAst(postNode.htmlAst)}
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
