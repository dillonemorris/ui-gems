import React from 'react'
import { Container, Title, IconContainer, SubTitle } from './style'
import filters from '../../data/filters'
import MobileLink from '../MobileLink'

const MobileHeader = ({ title, filter, link, activeFilter }) => {
  return (
    <Container>
      {filters.map(
        filter =>
          activeFilter === filter.name && (
            <IconContainer key={filter.name}>{filter.icon}</IconContainer>
          )
      )}
      <Title>
        {title}
        <SubTitle>{filter}</SubTitle>
      </Title>
      <MobileLink link={link} />
    </Container>
  )
}

export default MobileHeader
