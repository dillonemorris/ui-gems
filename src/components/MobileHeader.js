import React from 'react'
import styled from 'styled-components'
import filters from '../data/filters'
import MobileLink from './MobileLink'

const Container = styled.div`
  display: flex;
  margin-top: 100px;
  left: 20px;
  top: 0;
  position: fixed;
  transition: all 0.3s ease;
  opacity: 0.7;

  -webkit-animation: buttonFade 0.9s 1;
  -moz-animation: buttonFade 0.9s 1;
  -o-animation: buttonFade 0.9s 1;
  animation: buttonFade 0.9s 1;

  @-webkit-keyframes buttonFade {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0.8;
    }
  }
  @-moz-keyframes buttonFade {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0.8;
    }
  }
  @-o-keyframes buttonFade {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0.8;
    }
  }
  @keyframes buttonFade {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0.8;
    }
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  @media (min-width: 600px) {
    display: none;
  }
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 22px;
  letter-spacing: 0.4px;
  font-weight: 600;
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.gray100};
`

const IconContainer = styled.div`
  display: flex;
  margin-right: 12px;
  border-radius: 100%;
  background-color: ${props => props.theme.colors.accentGrey};
  padding: 10px;
`

const SubTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.gray400};
  margin-right: auto;
  margin-top: 5px;
`

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
