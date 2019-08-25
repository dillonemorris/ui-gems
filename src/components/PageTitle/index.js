import React from 'react'
import { Title } from './style'

const PageTitle = props => {
  return <Title small={props.small}>{props.children}</Title>
}

export default PageTitle
