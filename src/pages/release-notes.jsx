import React from 'react';
import RehypeReact from 'rehype-react';
import _ from 'lodash';
import AsideMenu from '../components/AsideMenu';
import Callout from '../componentsMarkdown/Callout';
import CodeGroup from '../componentsMarkdown/CodeGroup';
import NavSub from '../components/NavSub';
import './release-notes.scss';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    'call-out': Callout,
    'code-group': CodeGroup,
  },
}).Compiler;

export default class ReleaseNotes extends React.Component {
  getAsideLinks() {
    const { edges } = this.props.data.releaseNotes;
    const overview = {
      tagName: 'h2',
      textNode: 'Overview',
      id: 'overview',
    };

    const asideLinks = edges.map((edge) => {
      const link = {};
      link.tagName = 'h2';
      link.textNode = edge.node.frontmatter.date;
      link.id = _.kebabCase(edge.node.frontmatter.date);
      return link;
    });

    return [overview, ...asideLinks];
  }

  render() {
    const { edges } = this.props.data.releaseNotes;
    const asideLinks = this.getAsideLinks();

    return (
      <div className="releas-notes-main">
        <NavSub />
        <div className="container-lg">
          <div className="row">
            <div className="col-md-3">
              <AsideMenu asideLinks={asideLinks} />
            </div>
            <div className="col-md-9">
              <h1>Release Notes</h1>
              <div className="release-notes-overview m-bottom-6">
                <h2 className="hidden">
                  <a href="#overview" className="anchor" data-slug="overview">Overview</a>
                </h2>
                <p className="is-size-h3">If you’re looking for SendGrid’s opererational status, see our <a href="http://status.sendgrid.com/">Status Page</a>.</p>
                <p className="is-size-h3">Some categories featured in our release notes include:</p>
              </div>
              <div className="realease-notes-key m-bottom-8">
                <div className="release-notes-key__icon is-size-h5">
                  <div className="icon-ui" />
                  UI Update
                </div>
                <div className="release-notes-key__icon">
                  <div className="icon-api" />
                  API Update
                </div>
                <div className="release-notes-key__icon">
                  <div className="icon-partners" />
                  Partners Update
                </div>
                <div className="release-notes-key__icon">
                  <div className="icon-price" />
                  Price Update
                </div>
              </div>
              {edges.map(edge => (
                <div key={edge.node.frontmatter.date} className="release-note m-bottom-4">
                  <div className="release-row">
                    <div className="icons">
                      {edge.node.frontmatter.releaseType.map(type => <div key={type} className={`icons__icon icon-${type}`}>{type}<br />update</div>)}
                    </div>
                    <div className="html-ast p-bottom-7">
                      <h2 id={_.kebabCase(edge.node.frontmatter.date)} className="is-size-h1" >
                        <a href={`#${_.kebabCase(edge.node.frontmatter.date)}`} className="anchor" data-slug={_.kebabCase(edge.node.frontmatter.date)}>
                          <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
                            <path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />
                          </svg>
                        </a>
                        {edge.node.frontmatter.date}
                      </h2>
                      {renderAst(edge.node.htmlAst)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export const pageQuery = graphql`
  query releaseNote {
    releaseNotes: allMarkdownRemark(
      filter: { fields: {docType: { eq: "release-notes" } } },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          htmlAst
          frontmatter {
            releaseType
            date(formatString: "Do MMMM, YYYY")
          }
        }
      }
    }
  }
`;
