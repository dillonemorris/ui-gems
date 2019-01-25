// import { graphql } from 'gatsby'
import React, { Component } from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import FilterBar from '../components/FilterBar'
import PostCard from '../components/PostCard'

const GridContainer = styled.div`
  background-color: ${props => props.theme.colors.tertiaryBackground};
`

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  grid-gap: 20px;
  padding: 40px 20px;
  max-width: 1120px;
  justify-items: center;
  margin: auto;

  ${props =>
    props.isScrolled &&
    `
    padding-top: 108px;
`};

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
    activeFilter: null,
    isScrolled: false,
  }

  componentDidMount() {
    const posts = this.props.data.allContentfulPost.edges
    const defaultPosts = posts.filter(
      ({ node: post }) => post.filter === 'Sign in'
    )
    this.setState({ filteredPosts: defaultPosts, activeFilter: 'Sign in' })

    const checkSlide = () => {
      const el = document.querySelector('#target')

      if (el.getBoundingClientRect().bottom <= 0) {
        this.setState({
          isScrolled: true,
        })
      } else if (el.getBoundingClientRect().bottom >= 0) {
        this.setState({
          isScrolled: false,
        })
      }
    }

    window.addEventListener('scroll', checkSlide)
  }

  handleFilterClick = filter => {
    const posts = this.props.data.allContentfulPost.edges
    const displayPosts = posts.filter(
      ({ node: post }) => post.filter === filter
    )
    this.setState({
      filteredPosts: displayPosts,
      activeFilter: filter,
    })
  }

  render() {
    const { filteredPosts, isScrolled } = this.state
    const { isLight } = this.props

    return (
      <Layout>
        <FilterBar
          isScrolled={this.state.isScrolled}
          activeFilter={this.state.activeFilter}
          handleFilterClick={this.handleFilterClick}
        />
        <GridContainer>
          <PostGrid isScrolled={isScrolled}>
            {filteredPosts.map(({ node: post }, i) => {
              return (
                <PostCard
                  isLight={isLight}
                  activeFilter={this.state.activeFilter}
                  key={post.link}
                  link={post.link}
                  filter={post.filter}
                  heroImage={post.heroImage}
                  title={post.title}
                />
              )
            })}
          </PostGrid>
        </GridContainer>
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
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          filter
          link
        }
      }
    }
  }
`

export default Index
