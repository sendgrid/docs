const visit = require('unist-util-visit');

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'html', (node) => {
    let remarked = node.value.replace(/```raw/g, '<pre class="language-text"><code>');
    remarked = remarked.replace(/```/g, '</code></pre>');
    node.value = remarked;
  });

  return markdownAST;
};
