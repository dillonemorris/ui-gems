import React, { Component } from 'react'
import styled from 'styled-components'
import Modal from 'styled-react-modal'
import ModalIconLight from '../images/ModalIconLight'
import filters from '../data/filters'
import Img from 'gatsby-image'

const StyledModal = Modal.styled`
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, .1), 0 0 0 1px rgba(0, 0, 0,.12), 0 14px 28px rgba(0, 0, 0, .15), 0 10px 10px rgba(0, 0, 0, .12);
  border-radius: 6px;
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.gray100};
  margin: auto;
  overflow: hidden;
  animation-name: modalFade;
  animation-duration: .5s;

  @keyframes modalFade {
    from {transform: translateY(-12%);opacity: 0;}
  to {transform: translateY(0);opacity: 1;}
  }

  @media (min-width: 700px) {
    width: 75%;
  }

  @media (min-width: 900px) {
    width: 55%;
  }
`

const Button = styled.button`
  margin-top: 20px;
  right: 20px;
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
`

const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.secondaryBackground};
  padding: 16px 20px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 22px;
  letter-spacing: 0.4px;
  font-weight: 600;
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.body};
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
  color: ${props => props.theme.colors.gray500};
  margin-right: auto;
  margin-top: 5px;
`

const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  border-radius: 6px;
  padding: 10px 38px;
  border: 2px solid ${props => props.theme.colors.accentGrey};
  background-color: ${props => props.theme.colors.btnBackground};
  font-family: ${props => props.theme.fonts.body};
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.btnColor};
  letter-spacing: 0.3px;
  transition: 0.3s all ease;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.tertiaryBackground};
  }
`

const Link = styled.a`
  text-decoration: none;
  margin-left: auto;
`

class PostCardModal extends Component {
  render() {
    const {
      heroImage,
      title,
      filter,
      activeFilter,
      link,
      isLight,
      isOpen,
      onBackgroundClick,
      toggleModal,
    } = this.props
    return (
      <StyledModal
        allowScroll
        className="box"
        isOpen={isOpen}
        onBackgroundClick={onBackgroundClick}
        onEscapeKeydown={onBackgroundClick}
        isLight={isLight}
      >
        <button style={{ backgroundColor: 'cornflowerblue', color: '#fafafa' }}>
          previous
        </button>
        <Header>
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
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <ModalButton>
              <ModalIconLight />
              Visit site
            </ModalButton>
          </Link>
        </Header>
        <Img fluid={heroImage.fluid} />
        <Button isOpen={isOpen} onClick={toggleModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="#ABAAB6"
          >
            <path d="M4.93 19.07A10 10 0 1 1 19.07 4.93 10 10 0 0 1 4.93 19.07zm1.41-1.41A8 8 0 1 0 17.66 6.34 8 8 0 0 0 6.34 17.66zM13.41 12l1.42 1.41a1 1 0 1 1-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 1 1-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 1 1 1.42-1.42L12 10.6l1.41-1.42a1 1 0 1 1 1.42 1.42L13.4 12z" />
          </svg>
        </Button>
        <button style={{ backgroundColor: 'cornflowerblue', color: '#fafafa' }}>
          next
        </button>
      </StyledModal>
    )
  }
}

export default PostCardModal