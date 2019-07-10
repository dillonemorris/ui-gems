import React from 'react'
import styled from 'styled-components'
import LightArrow from '../images/LightArrow'
import DarkArrow from '../images/DarkArrow'
import LightLogo from '../images/LightLogo'
import DarkLogo from '../images/DarkLogo'
import LightHero from '../images/LightHero'
import DarkHero from '../images/DarkHero'

import ThemeButton from './ThemeButton'
import ThemeButtonMobile from './ThemeButtonMobile'

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${props => props.theme.colors.secondaryBackground};

  @media (min-width: 855px) {
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
  flex-direction: column;
  max-width: 600px;
  align-items: flex-end;
  justify-content: center;

  @media (min-width: 855px) {
    display: flex;
  }

  -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1s; /* Firefox < 16 */
  -ms-animation: fadein 1s; /* Internet Explorer */
  -o-animation: fadein 1s; /* Opera < 12.1 */
  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const IllustrationContainer = styled.div`
  padding: 40px 32px 0px 60px;
  margin-right: 30px;

  @media (min-width: 920px) {
    padding: 34px 40px 0px 60px;
  }
`

const Heading = styled.h1`
  color: ${props => props.theme.colors.heroText};
  font-size: 32px;
  font-family: ${props => props.theme.fonts.display};
  font-weight: 500;

  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.3;
  padding-right: 0px;
  padding-top: 32px;
  padding-bottom: 32px;

  span {
    font-weight: 800;
    font-style: italic;
  }

  @media (min-width: 855px) {
    padding-top: 75px;
    padding-right: 20px;
  }

  @media (min-width: 1053px) {
    font-size: 40px;
  }

  -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1s; /* Firefox < 16 */
  -ms-animation: fadein 1s; /* Internet Explorer */
  -o-animation: fadein 1s; /* Opera < 12.1 */
  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 32px;

  @media (min-width: 855px) {
    padding-top: 0px;
    justify-content: left;
  }

  -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 0.5s; /* Firefox < 16 */
  -ms-animation: fadein 0.5s; /* Internet Explorer */
  -o-animation: fadein 0.5s; /* Opera < 12.1 */
  animation: fadein 0.5s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
  justify-content: center;
  margin-bottom: 48px;

  @media (min-width: 855px) {
    margin-bottom: 0px;
    justify-content: left;
  }

  &:hover {
    cursor: pointer;
  }
`

const Inner = styled.div`
  padding: 16px 16px 0px 16px;
  max-width: 600px;
  margin: auto;
  text-align: center;

  @media (min-width: 855px) {
    text-align: left;
    padding: 34px 40px 0px 60px;
    margin: 0;
  }
`

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
