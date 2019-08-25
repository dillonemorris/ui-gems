import React from 'react'
import {
  HeroContainer,
  HeroLeft,
  HeroRight,
  IllustrationContainer,
  Heading,
  Logo,
  LogoText,
  CallToAction,
  Inner,
} from './style'
import LightArrow from '../../images/LightArrow'
import DarkArrow from '../../images/DarkArrow'
import LightLogo from '../../images/LightLogo'
import DarkLogo from '../../images/DarkLogo'
import LightHero from '../../images/LightHero'
import DarkHero from '../../images/DarkHero'

import ThemeButton from '../ThemeButton'
import ThemeButtonMobile from '../ThemeButtonMobile'

const Hero = ({ isLight, title, handleClick, handleScrollIntoView }) => {
  return (
    <HeroContainer id="target">
      <HeroLeft>
        <Inner>
          <ThemeButtonMobile
            isLight={isLight}
            handleClick={handleClick}
            title={title}
          />
          <Logo>
            {isLight ? <LightLogo /> : <DarkLogo />}
            <LogoText>UI Gems</LogoText>
          </Logo>
          <Heading>
            Bringing you the <span>best of the best</span> UI designs on the
            web.
          </Heading>
          <CallToAction onClick={handleScrollIntoView}>
            Get inspired
            {isLight ? <LightArrow /> : <DarkArrow />}
          </CallToAction>
        </Inner>
      </HeroLeft>
      <HeroRight>
        <ThemeButton
          isLight={isLight}
          handleClick={handleClick}
          title={title}
        />
        <IllustrationContainer>
          {isLight ? <LightHero /> : <DarkHero />}
        </IllustrationContainer>
      </HeroRight>
    </HeroContainer>
  )
}

export default Hero
