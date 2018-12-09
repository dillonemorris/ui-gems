// import { graphql } from 'gatsby'
import React, { Component } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import posts from '../data/posts'

const filters = ['Sign in', 'Hero', 'Pricing']

class Index extends Component {
  state = {
    filteredPosts: [],
    activeFilter: 'Sign in',
  }

  handleFilterClick(filter) {
    const displayPosts = posts.filter(post => post.filter === filter)
    this.setState({ filteredPosts: displayPosts, activeFilter: filter })
  }

  renderFilterBar = () => {
    return filters.map(filter => (
      <div key={filter} onClick={() => this.handleFilterClick(filter)}>
        {filter}
      </div>
    ))
  }

  render() {
    const { filteredPosts } = this.state

    return (
      <Layout>
        <Hero />
        {this.renderFilterBar()}
        <div>
          {filteredPosts.map(post => {
            return <div key={post.title}>{post.title}</div>
          })}
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      filter
    }
  }
`

export default Index
