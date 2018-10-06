const visit = require('unist-util-visit');
const cheerio = require('cheerio');

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'html', (node) => {
    const $ = cheerio.load(node.value);
    const table = $('table');

    if (table.length) {
      const rawHTML = `
        <div class="table-wrap">
          ${table}
        </div>
        `;

      node.data = {
        hChildren: [{ type: 'raw', value: rawHTML }],
        // Set type to unknown so mdast-util-to-hast will treat this node as a
        // div not an iframe — it gets quite confused otherwise.
      }; node.type = 'unknown';

      // Also apparently, for html node types, you have to delete the value
      // in order for mdast-util-to-hast to use hChildren. If even if
      // you change the node type to unknown...
      delete node.value;
    }
  });

  return markdownAST;
};

