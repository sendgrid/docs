const path = require('path')
const _ = require('lodash')
const webpackLodashPlugin = require('lodash-webpack-plugin')
/**
 * Generate node edges
 *
 * @param {any} { node, boundActionCreators, getNode }
 */
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  /**
   * Add slug edge
   */
  let slug
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`
    } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`
    } else {
      slug = `/${parsedFilePath.dir}/`
    }
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`
    }
    createNodeField({ node, name: 'slug', value: slug })

    /**
     * Add permalink edge
     *
     * If there is a path frontmatter - that overrides all. Otherwise, we'll use the nested directory structure to build the permalink.
     */
    let permalink
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'path')
    ) {
      permalink = `${node.frontmatter.path}${slug}`
    } else if (parsedFilePath.dir !== '') {
      permalink = `${parsedFilePath.dir}${slug}`
    } else {
      permalink = slug
    }

    createNodeField({ node, name: 'permalink', value: permalink })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const docsPage = path.resolve('src/templates/doc.jsx')

    resolve(
      graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  tags
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
      `).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors)
          reject(result.errors)
        }

        const tagSet = new Set()
        const categorySet = new Set()
        result.data.allMarkdownRemark.edges.forEach(edge => {
          // const uri = edge.node.frontmatter.uri ? edge.node.frontmatter.uri : ''

          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag)
            })
          }

          if (edge.node.frontmatter.category) {
            categorySet.add(edge.node.frontmatter.category)
          }

          // Create docs pages
          createPage({
            path: edge.node.fields.permalink,
            component: docsPage,
            context: {
              slug: edge.node.fields.slug,
            },
          })
        })
      })
    )
  })
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    config.plugin('Lodash', webpackLodashPlugin, null)
  }
}

// SASS Sourcemaps
exports.modifyWebpackConfig = ({ config }) => {
  const newConfig = { ...config }
  const loadersArr = ['style', 'css?sourceMap', 'sass', 'sass?sourceMap']
  if (config._loaders.sass.config.loaders) {
    newConfig._loaders.sass.config.loaders = loadersArr
  }
  return newConfig
}
