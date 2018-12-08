// import { graphql } from 'gatsby'
import React, { Component } from 'react'
import Layout from '../components/Layout'
import Home from '../components/Home'

class Index extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <Home data={data} />
      </Layout>
    )
  }
}

export const query = graphql`
  query indexQuery {
    contentfulHome {
      heroText
    }
  }
`

export default Index
