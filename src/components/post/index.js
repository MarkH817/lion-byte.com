import * as React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'

export class PostPreview extends React.PureComponent {
  render () {
    const {
      post: { excerpt, frontmatter }
    } = this.props

    return (
      <article className='blog-post-preview'>
        <h3 className='title'>
          <Link to={frontmatter.path}>{frontmatter.title}</Link>
        </h3>

        <time>{frontmatter.date}</time>

        <hr />

        <p className='excerpt'>{excerpt}</p>
      </article>
    )
  }
}

export class PostPreviewList extends React.PureComponent {
  render () {
    const { className, limit } = this.props

    return (
      <StaticQuery
        query={graphql`
          query PostPreviewListQuery {
            postPreviews: allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              filter: { frontmatter: { type: { eq: "post" } } }
            ) {
              edges {
                node {
                  id
                  excerpt(pruneLength: 250)
                  frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    path
                    title
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const {
            postPreviews: { edges }
          } = data

          return (
            <section className={className}>
              {edges.slice(0, limit).map(edge => (
                <PostPreview key={edge.node.id} post={edge.node} />
              ))}
            </section>
          )
        }}
      />
    )
  }
}

PostPreviewList.defaultProps = {
  limit: 10
}
