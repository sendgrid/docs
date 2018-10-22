import React from 'react';
import _ from 'lodash';
import RehypeReact from 'rehype-react';
import Callout from '../../componentsMarkdown/Callout';
import CodeGroup from '../../componentsMarkdown/CodeGroup';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    'call-out': Callout,
    'code-group': CodeGroup,
  },
}).Compiler;

const ReleaseNotePost = ({ node }) => (
  <div key={node.frontmatter.date} className="release-note m-bottom-4">
    <div className="release-row">
      <div className="icons">
        {node.frontmatter.releaseType.map(type => <div key={type} className={`icons__icon icon-${type}`}>{type}<br />update</div>)}
      </div>
      <div className="html-ast p-bottom-7">
        <h2 id={_.kebabCase(node.frontmatter.date)} className="is-size-h1" >
          <a href={`#${_.kebabCase(node.frontmatter.date)}`} className="anchor" data-slug={_.kebabCase(node.frontmatter.date)}>
            <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
              <path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />
            </svg>
          </a>
          {node.frontmatter.date}
        </h2>
        {renderAst(node.htmlAst)}
      </div>
    </div>
  </div>
);


export default ReleaseNotePost;
