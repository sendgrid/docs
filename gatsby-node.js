const path = require('path');
const _ = require('lodash');
const webpackLodashPlugin = require('lodash-webpack-plugin');
const axios = require('axios');
const crypto = require('crypto');

/**
 * Generate node edges
 *
 * @param {any} { node, boundActionCreators, getNode }
 */
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  /**
   * Add slug edge
   */
  let slug;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`;
    }
    createNodeField({ node, name: 'slug', value: slug });

    /**
     * Add permalink edge
     *
     * If there is a path frontmatter - that overrides all. Otherwise, we'll use the nested directory structure to build the permalink.
     */
    let permalink;
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'path')
    ) {
      permalink = `${node.frontmatter.path}${slug}`;
    } else if (parsedFilePath.dir !== '') {
      permalink = `${parsedFilePath.dir}${slug}`;
    } else {
      permalink = slug;
    }

    createNodeField({ node, name: 'permalink', value: permalink });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const docsPage = path.resolve('src/templates/doc.jsx');

    resolve(graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  permalink
                  slug
                }
              }
            }
          }
        }
      `).then((result) => {
      if (result.errors) {
        /* eslint no-console: "off" */
        console.log(result.errors);
        reject(result.errors);
      }

      result.data.allMarkdownRemark.edges.forEach((edge) => {
        // Create docs pages
        createPage({
          path: edge.node.fields.permalink,
          component: docsPage,
          context: {
            slug: edge.node.fields.slug,
          },
        });
      });
    }));
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    config.plugin('Lodash', webpackLodashPlugin, null);
  }
};

// SASS Sourcemaps
exports.modifyWebpackConfig = ({ config }) => {
  const newConfig = { ...config };
  const loadersArr = ['style', 'css?sourceMap', 'sass', 'sass?sourceMap'];
  if (config._loaders.sass.config.loaders) {
    newConfig._loaders.sass.config.loaders = loadersArr;
  }
  return newConfig;
};

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  // fetch raw data from the randomuser api
  const fetchSendGridFooterMenu = () => axios.get('http://wpgrid.lndo.site:8000/wp-json/sg/menus/footer');
  // await for results
  const res = await fetchSendGridFooterMenu();

  // map results and create nodes
  res.data.map((link, i) => {
    // Create node object
    const footerLink = {
      id: `${i}`,
      parent: '__SOURCE__',
      internal: {
        type: 'footerLinks', // name of the graphQL query.
      },
      children: [],
      url: link.url,
      parentLink: link.parent,
      title: link.post_title,
    };

    // Get content digest of node.
    const contentDigest = crypto
      .createHash('md5')
      .update(JSON.stringify(footerLink))
      .digest('hex');
    // add it to footerLink
    footerLink.internal.contentDigest = contentDigest;

    createNode(footerLink);
  });
};

