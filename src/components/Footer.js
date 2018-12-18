import React from 'react'
import styled from 'styled-components'
import Gem from '../images/purple-gem.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px;
  background-color: #f7f7f7;
`

const LogoText = styled.div`
  color: ${props => props.theme.colors.primary};
  font-family: Overpass;
  font-weight: 700;
  font-size: 18px;
  padding-left: 6px;
`

const Img = styled.img`
  display: flex;
`

const Footer = () => (
  <Wrapper>
    <Img src={Gem} style={{ width: '30px' }} alt="UI Gems" />
    <LogoText>UI Gems</LogoText>
  </Wrapper>
)

export default Footer
