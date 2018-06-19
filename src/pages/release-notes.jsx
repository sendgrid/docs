import React from 'react';
import _ from 'lodash';
import AsideMenu from '../components/AsideMenu';
import ReleaseKey from '../components/ReleaseNotes/ReleaseKey';
import ReleaseNotePost from '../components/ReleaseNotes/ReleaseNotePost';
import withSubNav from '../components/NavSub';
import './release-notes.scss';

class ReleaseNotes extends React.Component {
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
            <ReleaseKey />
            {edges.map(edge => <ReleaseNotePost key={edge.node.frontmatter.date} node={edge.node} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default withSubNav()(ReleaseNotes);

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
