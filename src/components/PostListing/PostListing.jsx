import React from 'react'
import Link from 'gatsby-link'

class PostListing extends React.Component {
  getPostList() {
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.permalink,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      })
    })
    return postList
  }
  render() {
    const postList = this.getPostList()
    return (
      <div>
        {postList.map((post, i) => (
          <Link to={post.path} key={i}>
            <h1>
              {i + 1} - {post.title}
            </h1>
          </Link>
        ))}
      </div>
    )
  }
}

export default PostListing
