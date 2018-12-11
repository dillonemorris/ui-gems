// import { graphql } from 'gatsby'
import React, { Component } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import FilterBar from '../components/FilterBar'
import PostCard from '../components/PostCard'
import styled from 'styled-components'

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  grid-gap: 20px;
  padding: 100px 20px;
  max-width: 1120px;
  justify-items: center;
  margin: auto;

  @media (min-width: 860px) {
    grid-auto-rows: 360px;
  }

  @media (min-width: 1050px) {
    grid-auto-rows: 400px;
  }
`

class Index extends Component {
  state = {
    filteredPosts: [],
    activeFilter: 'Sign in',
  }

  handleFilterClick = filter => {
    const posts = this.props.data.allContentfulPost.edges
    console.log(posts)
    const displayPosts = posts.filter(
      ({ node: post }) => post.filter === filter
    )
    this.setState({ filteredPosts: displayPosts, activeFilter: filter })
  }

  render() {
    const { filteredPosts } = this.state

    return (
      <Layout>
        <Hero />
        <FilterBar handleFilterClick={this.handleFilterClick} />
        <PostGrid>
          {filteredPosts.map(({ node: post }, i) => {
            return (
              <PostCard
                key={i}
                image={post.heroImage.ogimg}
                imageTitle={post.heroImage.ogimg.title}
              />
            )
          })}
        </PostGrid>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    allContentfulPost(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
          heroImage {
            title
            ogimg: resize(width: 1800) {
              src
              width
              height
            }
          }
          filter
        }
      }
    }
  }
`

export default Index
