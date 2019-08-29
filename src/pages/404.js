import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import PurpleLightLogo from '../images/PurpleLightLogo'

const Text = styled.p`
  text-align: center;
  margin-top: 8px;
  a {
    color: #121212;
  }
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  color: #6F6E7B;
`

const Heading = styled.h1`
  text-align: center;
  line-height: 1.4;
  margin: 8px 0 0 0;
  a {
    color: #121212;
  }
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 600px;
  margin: auto;
  align-items: center;
  justify-content: center;
  height: 80vh;
`

const Button = styled.button`
  background-color: #605DEE;
  color: #fff;
  font-size: 18px;
  letter-spacing: .3px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  border: none;
  box-shadow: none;
  border-radius: 32px;
  padding: 18px 36px;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`


const NotFound = () => (
  <Container>
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>
    <Inner>
      <PurpleLightLogo width={40} />
      <Heading>Page not found</Heading>
      <Text>
        There is nothing here except a mostly blank page
      </Text>
      <Link href='/'>
        <Button>Back to gems</Button>
      </Link>
    </Inner>
  </Container>
)

export default NotFound
