import React from 'react'
import styled from 'styled-components'
import Diamond from '../images/diamond.png'
import Humans from '../images/humans.png'

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`

const HeroLeft = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;

  @media (min-width: 700px) {
    justify-content: flex-end;
  }
`

const HeroRight = styled.div`
  background-color: #fff;
  max-width: 600px;
  display: none;
  align-items: flex-end;
  justify-content: center;

  @media (min-width: 700px) {
    display: flex;
  }
`
const Heading = styled.h1`
  color: #fff;
  font-size: 32px;
  font-family: ${props => props.theme.fonts.display};
  font-weight: 500;
  letter-spacing: 0.6px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.4;
  padding-top: 40px;
  padding-bottom: 18px;

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
  color: #fff;
  font-family: ${props => props.theme.fonts.secondary};
  letter-spacing: 0.6px;
  font-size: 20px;
  font-weight: 600;
  padding-left: 6px;
`

const SubHeading = styled.h3`
  color: ${props => props.theme.colors.highlight};
  font-size: 18px;
  font-family: ${props => props.theme.fonts.secondary};
  letter-spacing: 0.4px;
  display: flex;
  align-content: center;
`

const Inner = styled.div`
  padding: 60px 40px 60px 60px;
  max-width: 600px;
`

const Hero = props => {
  return (
    <HeroContainer>
      <HeroLeft>
        <Inner>
          <Logo>
            <img style={{ width: '28px' }} src={Diamond} alt="diamond-logo" />
            <LogoText>UI Gems</LogoText>
          </Logo>
          <Heading>
            Bringing you the <span>best of the best</span> UI designs on the
            web.
          </Heading>
          <SubHeading>
            Get inspired{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style={{ marginLeft: '6px' }}
              width="17"
              height="17"
              fill="#8FFBE4"
            >
              <path d="M11 18.59V3a1 1 0 0 1 2 0v15.59l5.3-5.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 0 1 1.4-1.42l5.3 5.3z" />
            </svg>
          </SubHeading>
        </Inner>
      </HeroLeft>
      <HeroRight>
        <div>
          <img
            style={{ width: '380px' }}
            src={Humans}
            alt="humans-illustration"
          />
        </div>
      </HeroRight>
    </HeroContainer>
  )
}

export default Hero
