import React, { Component, Fragment } from 'react'
import {
  StyledModal,
  Button,
  Footer,
  Title,
  IconContainer,
  SubTitle,
  ModalButton,
  Link,
} from './style'

import ModalIcon from '../../images/ModalIcon'
import filters from '../../data/filters'
import Img from 'gatsby-image'
import MobileHeader from '../MobileHeader'

class PostCardModal extends Component {
  render() {
    const {
      heroImage,
      title,
      filter,
      activeFilter,
      link,
      isOpen,
      onBackgroundClick,
      toggleModal,
    } = this.props

    return (
      <Fragment>
        <StyledModal
          allowScroll
          className="box"
          isOpen={isOpen}
          onBackgroundClick={onBackgroundClick}
          onEscapeKeydown={onBackgroundClick}
        >
          <MobileHeader
            title={title}
            filter={filter}
            link={link}
            activeFilter={activeFilter}
          />
          <Footer>
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
            <Link href={link} rel="noopener noreferrer">
              <ModalButton>
                <ModalIcon />
                <span style={{ marginLeft: '4px' }}>Visit site</span>
              </ModalButton>
            </Link>
          </Footer>
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
        </StyledModal>
      </Fragment>
    )
  }
}

export default PostCardModal
