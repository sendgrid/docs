const path = require('path');
const _ = require('lodash');
const webpackLodashPlugin = require('lodash-webpack-plugin');
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
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${node.frontmatter.slug}`;
    } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
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
    createNodeField({ node, name: 'slug', value: _.kebabCase(slug).toLowerCase() });

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
    createNodeField({ node, name: 'permalink', value: permalink.toLowerCase() });

    /**
     * Check if doc is "ui" or "for developers" and add a field slug to represent this.
     */
    let docType;
    if (permalink.match(/ui\/[^/]+/)) {
      docType = 'ui';
    } else if (permalink.match(/for-developers\/[^/]+/)) {
      docType = 'for-developers';
    } else if (permalink.match(/glossary\/[^/]+/)) {
      docType = 'glossary';
    } else if (permalink.match(/release-notes\/[^/]+/)) {
      docType = 'release-notes';
    }

    createNodeField({ node, name: 'docType', value: docType });

    let cat;
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'category')
    ) {
      cat = node.frontmatter.category;
    } else {
      // remove docType prefix
      cat = parsedFilePath.dir.replace(`${docType}`, '');
      cat = cat.split('/');
      cat = (cat.length > 1 && cat[1].length) ? cat[1] : 'uncategorized';
    }

    createNodeField({ node, name: 'category', value: cat });

    let group = 'ungrouped';
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'group')
    ) {
      group = node.frontmatter.group;
    }
    createNodeField({ node, name: 'group', value: group });

    let title;
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      title = node.frontmatter.title;
    } else {
      title = parsedFilePath.name.replace('-', '');
    }
    createNodeField({ node, name: 'title', value: title });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage, createRedirect } = boundActionCreators;

  createRedirect({
    fromPath: '/ui/',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: '/',
  });

  createRedirect({
    fromPath: '/ui',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: '/',
  });

  return new Promise((resolve, reject) => {
    const docsPage = path.resolve('src/templates/doc.jsx');
    const categoryPage = path.resolve('src/templates/category.jsx');

    resolve(graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                id
                fileAbsolutePath
                fields {
                  permalink
                  slug
                  category
                  docType
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
        const {
          category,
          docType,
        } = edge.node.fields;

        // aggregate "ui" categories
        if (docType === 'ui') {
          helpCategorySet.add(category);
        }

        // aggregate "for-developers" categories
        if (docType === 'for-developers') {
          developerCategorySet.add(category);
        }

        // Create docs pages
        const { permalink } = edge.node.fields;

        createPage({
          path: permalink,
          component: docsPage,
          context: {
            slug: edge.node.fields.slug,
            id: edge.node.id,
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

        // add it to contentNode
        cat.internal.contentDigest = contentDigest;

        // Create "/for-developers/<category-slug>" pages.
        createPage({
          path: `/for-developers/${_.kebabCase(category)}/`,
          component: categoryPage,
          context: {
            docType: 'for-developers',
            category,
          },
        });
      });

      const helpCategoryList = Array.from(helpCategorySet);
      helpCategoryList.forEach((category, i) => {
        // Create "ui" category nodes.
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

        // Create "/ui/<category-slug>" pages.
        createPage({
          path: `/ui/${_.kebabCase(category)}/`,
          component: categoryPage,
          context: {
            docType: 'ui',
            category,
          },
        });
      });
    }));
  });
};

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve) => {
    if (page.path.match(/^\/404/)) {
      // It's assumed that `landingPage.js` exists in the `/layouts/` directory
      page.layout = 'noHeaderFooter';

      // Update the page.
      createPage(page);
    }

    resolve();
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
