import React, { useState, Fragment } from 'react'
import filters from '../data/filters'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import Modal from './Modal'
import ModalIconLight from '../images/ModalIconLight'
import EnlargeButton from '../images/EnlargeButton'

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  box-shadow: ${props => props.theme.boxShadow.default};
  border-radius: 6px;
  transition: 0.3s all ease;

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

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 20px;
  letter-spacing: 0.4px;
  font-weight: 600;
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.body};
`

const SubTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.gray500};
  margin-right: auto;
`
const IconContainer = styled.div`
  display: flex;
  margin-right: 12px;
  border-radius: 100%;
  background-color: ${props => props.theme.colors.accentGrey};
  padding: 6px;
`

const Link = styled.a`
  text-decoration: none;
  margin-left: auto;
`

const CardFooter = styled.div`
  transform: translateY(64px);
  padding: 35%;
  background: ${props => props.theme.colors.cardFooterBackground};
  opacity: 0.92;
  visibility: hidden;
  display: flex;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;

  @media (min-width: 855px) {
    bottom: 0px;
    padding: 16px 14px;
    width: 100%;
    position: absolute;
    visibility: visible;
    ${props =>
      props.isMouseOver &&
      `
      transform: translateY(0);
      transition: .2s ease-in-out all;
`};
    ${props =>
      !props.isMouseOver &&
      `
      transform: translateY(100%);
      transition: .2s ease-in-out all;
`};
  }
`

const ModalButtonContainer = styled.div`
  margin-left: auto;
`

const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  border-radius: 6px;
  padding: 6px 12px;
  border: 2px solid ${props => props.theme.colors.accentGrey};
  background-color: ${props => props.theme.colors.btnBackground};
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.btnColor};
  transition: 0.3s all ease;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.tertiaryBackground};
  }
`

const PostCard = ({
  heroImage,
  isLight,
  title,
  activeFilter,
  link,
  filter,
  index,
  posts,
}) => {
  const [isOpen, setOpen] = useState(false)
  const [isMouseOver, setMouseOver] = useState(false)

  const toggleModal = () => {
    setOpen(!isOpen)
  }

  const mouseEnter = () => {
    setMouseOver(true)
  }

  const mouseLeave = () => {
    setMouseOver(false)
  }

  return (
    <Fragment>
      <Modal
        posts={posts}
        allowScroll
        className="box"
        heroImage={heroImage}
        activeFilter={activeFilter}
        index={index}
        title={title}
        link={link}
        filter={filter}
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        toggleModal={toggleModal}
        isLight={isLight}
      />
      <StyledBackgroundImage
        fadeIn={false}
        fluid={heroImage.fluid}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <CardFooter isMouseOver={isMouseOver}>
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
          <ModalButtonContainer onClick={toggleModal}>
            <ModalButton>
              <EnlargeButton />
            </ModalButton>
          </ModalButtonContainer>
          <Link href={link} style={{ marginLeft: '6px' }}>
            <ModalButton>
              <ModalIconLight />
            </ModalButton>
          </Link>
        </CardFooter>
      </StyledBackgroundImage>
    </Fragment>
  )
}

export default PostCard
