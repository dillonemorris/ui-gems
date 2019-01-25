import React from 'react'
import styled from 'styled-components'
import LightArrow from '../images/LightArrow'
import DarkArrow from '../images/DarkArrow'
import LightLogo from '../images/LightLogo'
import DarkLogo from '../images/DarkLogo'
import LightHero from '../images/LightHero'
import DarkHero from '../images/DarkHero'

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${props => props.theme.colors.secondaryBackground};

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`

const HeroLeft = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary};

  @media (min-width: 700px) {
    justify-content: flex-end;
  }
`

const HeroRight = styled.div`
  background-color: ${props => props.theme.colors.secondaryBackground};
  display: none;
  max-width: 600px;
  align-items: flex-end;
  justify-content: center;

  @media (min-width: 700px) {
    display: flex;
  }
`

const IllustrationContainer = styled.div`
  padding: 60px 40px 0px 60px;
`

const Heading = styled.h1`
  color: ${props => props.theme.colors.heroText};
  font-size: 32px;
  font-family: ${props => props.theme.fonts.display};
  font-weight: 500;
  letter-spacing: 0.6px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.4;
  padding-top: 64px;
  padding-bottom: 32px;

  span {
    font-weight: 800;
    font-style: italic;
  }

  @media (min-width: 700px) {
    padding-top: 60px;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
`

const LogoText = styled.h3`
  color: ${props => props.theme.colors.heroText};
  font-family: ${props => props.theme.fonts.secondary};
  letter-spacing: 0.6px;
  font-size: 20px;
  font-weight: 600;
  padding-left: 6px;
`

const CallToAction = styled.h3`
  color: ${props => props.theme.colors.highlight};
  font-size: 20px;
  font-family: ${props => props.theme.fonts.secondary};
  letter-spacing: 0.4px;
  display: flex;
  align-content: center;

  &:hover {
    cursor: pointer;
  }
`

const Inner = styled.div`
  padding: 60px 40px 0px 60px;
  max-width: 600px;
`

const Hero = ({ isLight }) => {
  return (
    <HeroContainer id="target">
      <HeroLeft>
        <Inner>
          <Logo>
            {isLight ? <LightLogo /> : <DarkLogo />}
            <LogoText>UI Gems</LogoText>
          </Logo>
          <Heading>
            Bringing you the <span>best of the best</span> UI designs on the
            web.
          </Heading>
          <CallToAction>
            Get inspired
            {isLight ? <LightArrow /> : <DarkArrow />}
          </CallToAction>
        </Inner>
      </HeroLeft>
      <HeroRight>
        <IllustrationContainer>
          {isLight ? <LightHero /> : <DarkHero />}
        </IllustrationContainer>
      </HeroRight>
    </HeroContainer>
  )
}

export default Hero
