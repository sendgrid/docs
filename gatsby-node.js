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
      permalink = `/${node.frontmatter.path}${slug}`;
    } else if (parsedFilePath.dir !== '') {
      permalink = `/${parsedFilePath.dir}${slug}`;
    } else {
      permalink = slug;
    }
    createNodeField({ node, name: 'permalink', value: permalink });

    /**
     * Check if doc is "help-support" or "for developers" and add a field slug to represent this.
     */
    let docType = false;
    if (parsedFilePath.dir.match('help-support')) {
      docType = 'help-support';
    } else if (parsedFilePath.dir.match('for-developers')) {
      docType = 'for-developers';
    }
    createNodeField({ node, name: 'docType', value: docType });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage, createNode } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const docsPage = path.resolve('src/templates/doc.jsx');
    const categoryPage = path.resolve('src/templates/category.jsx');

    resolve(graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                fileAbsolutePath
                frontmatter {
                  category
                }
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

      const helpCategorySet = new Set();
      const developerCategorySet = new Set();

      result.data.allMarkdownRemark.edges.forEach((edge) => {
        // aggregate "help-support" categories
        if (edge.node.frontmatter.category && edge.node.fileAbsolutePath.match(/help-support\/[^/]+/)) {
          helpCategorySet.add(edge.node.frontmatter.category);
        }

        // aggregate "for-developers" categories
        if (edge.node.frontmatter.category && edge.node.fileAbsolutePath.match(/for-developers\/[^/]+/)) {
          developerCategorySet.add(edge.node.frontmatter.category);
        }

        // Create docs pages
        createPage({
          path: edge.node.fields.permalink,
          component: docsPage,
          context: {
            slug: edge.node.fields.slug,
          },
        });
      });

      const categoryList = Array.from(developerCategorySet);
      categoryList.forEach((category, i) => {
        // Create "for-developer" category nodes.
        const cat = {
          id: `${i}`,
          slug: category,
          parent: '__SOURCE__',
          children: [],
          internal: {
            type: 'forDeveloperCategories',
          },
        };
        // Get content digest of node. (Required field)
        const contentDigest = crypto
          .createHash('md5')
          .update(JSON.stringify(cat))
          .digest('hex');

        // add it to userNode
        cat.internal.contentDigest = contentDigest;

        // Create node with the gatsby createNode() API
        createNode(cat);

        // Create "/for-developers/<category-slug>" pages.
        createPage({
          path: `/for-developers/${_.kebabCase(category)}/`,
          component: categoryPage,
          context: {
            category,
          },
        });
      });


      const helpCategoryList = Array.from(helpCategorySet);
      helpCategoryList.forEach((category, i) => {
        // Create "help-support" category nodes.
        const cat = {
          id: `${i}`,
          slug: category,
          parent: '__SOURCE__',
          children: [],
          internal: {
            type: 'helpSupportCategories',
          },
        };
        // Get content digest of node. (Required field)
        const contentDigest = crypto
          .createHash('md5')
          .update(JSON.stringify(cat))
          .digest('hex');

        // add it to userNode
        cat.internal.contentDigest = contentDigest;

        // Create node with the gatsby createNode() API
        createNode(cat);

        // Create "/help-support/<category-slug>" pages.
        createPage({
          path: `/help-support/${_.kebabCase(category)}/`,
          component: categoryPage,
          docType: 'help-support',
          context: {
            category,
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
