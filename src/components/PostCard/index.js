import React, { useState, Fragment } from 'react'
import {
  StyledBackgroundImage,
  Title,
  SubTitle,
  IconContainer,
  Link,
  LinkContainer,
  ModalButton,
  CardOverlay,
} from './style'
import filters from '../../data/filters'
import PostCardModal from '../PostCardModal'
import PostCardIcon from '../../images/PostCardIcon'
import EnlargeButton from '../../images/EnlargeButton'

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
  const [isLinkClicked, setLinkClicked] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [isMouseOver, setMouseOver] = useState(false)
  const [isModalDisabled, setModalDisabled] = useState(false)

  const toggleModal = () => {
    if (isModalDisabled) {
      return
    }
    setOpen(!isOpen)
  }

  const disableModal = () => {
    setModalDisabled(true)
  }

  const enableModal = () => {
    setModalDisabled(false)
  }

  const mouseEnter = () => {
    setMouseOver(true)
  }

  const mouseLeave = () => {
    setMouseOver(false)
  }

  return (
    <Fragment>
      <PostCardModal
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
        onClick={toggleModal}
      >
        <CardOverlay isMouseOver={isMouseOver}>
          <Title>{title}</Title>
          <LinkContainer isMouseOver={isMouseOver}>
            <Link
              onMouseEnter={disableModal}
              onMouseLeave={enableModal}
              href={link}
              target="blank"
            >
              <ModalButton>
                <PostCardIcon />
              </ModalButton>
            </Link>
          </LinkContainer>
        </CardOverlay>
      </StyledBackgroundImage>
    </Fragment>
  )
}

export default PostCard
