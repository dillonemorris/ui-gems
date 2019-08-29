import React from 'react'
import { Wrapper, Logo, LogoText } from './style'
import PurpleLightLogo from '../../images/PurpleLightLogo'
import DarkLogo from '../../images/DarkLogo'

const Footer = ({ isLight }) => (
  <Wrapper>
    <Logo>
      {isLight ? <PurpleLightLogo width={29} /> : <DarkLogo />}
      <LogoText>UI Gems</LogoText>
    </Logo>
  </Wrapper>
)

export default Footer
