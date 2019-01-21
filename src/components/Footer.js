import React from 'react'
import styled from 'styled-components'
import PurpleLightLogo from '../images/PurpleLightLogo'
import DarkLogo from '../images/DarkLogo'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px;
  background-color: ${props => props.theme.colors.filterBar};
`

const Logo = styled.div`
  display: flex;
  align-items: center;
`

const LogoText = styled.h3`
  color: ${props => props.theme.colors.accent};
  font-family: ${props => props.theme.fonts.secondary};
  letter-spacing: 0.6px;
  font-size: 20px;
  font-weight: 600;
  padding-left: 6px;
`

const Footer = ({ isLight }) => (
  <Wrapper>
    <Logo>
      {isLight ? <PurpleLightLogo /> : <DarkLogo />}
      <LogoText>UI Gems</LogoText>
    </Logo>
  </Wrapper>
)

export default Footer
