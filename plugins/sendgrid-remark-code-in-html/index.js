const visit = require('unist-util-visit');

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'html', (node) => {
    let remarked = node.value.replace(/```/g, '<pre>');
    remarked = remarked.replace(/```/g, '</pre>');
    node.value = remarked;
    console.log(node);
  });

  return markdownAST;
};
