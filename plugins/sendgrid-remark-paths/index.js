const visit = require('unist-util-visit');

module.exports = ({ markdownAST, pathPrefix }) => {
  const uriPrefix = pathPrefix.length ? pathPrefix : '';

  // Replace {{root_url}} for all links
  visit(markdownAST, 'link', (node) => {
    if (
      node.url &&
      node.url.startsWith('{{root_url}}')
    ) {
      node.url = node.url.replace('{{root_url}}', uriPrefix);
    }
  });

  // Replace {{root_url}} for all imags
  visit(markdownAST, 'image', (node) => {
    if (
      node.url &&
      node.url.startsWith('{{root_url}}')
    ) {
      node.url = node.url.replace('{{root_url}}', uriPrefix);
    }
  });

  return markdownAST;
};
