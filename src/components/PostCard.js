import React, { Component, Fragment } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Modal from './Modal'

const Card = styled.div`
  width: 100%;
  box-shadow: ${props => props.theme.boxShadow.default};
  border-radius: 6px;
  transition: 0.3s all ease;

  &:hover {
    box-shadow: 0 20px 20px rgba(103, 110, 144, 0.08),
      0 12px 12px rgba(103, 110, 144, 0.08), 0 4px 4px rgba(103, 110, 144, 0.08),
      0 2px 2px rgba(103, 110, 144, 0.08);
    cursor: pointer;
  }
`
class PostCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal(e) {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { heroImage, isLight, title, activeFilter, link, filter } = this.props
    return (
      <Fragment>
        <Modal
          allowScroll
          className="box"
          heroImage={heroImage}
          activeFilter={activeFilter}
          title={title}
          link={link}
          filter={filter}
          isOpen={this.state.isOpen}
          onBackgroundClick={this.toggleModal}
          onEscapeKeydown={this.toggleModal}
          toggleModal={this.toggleModal}
          isLight={isLight}
        />
        <Card onClick={this.toggleModal}>
          <Img
            fadeIn={false}
            style={{ height: '100%' }}
            imgStyle={{
              borderRadius: '6px',
              height: '100%',
            }}
            fluid={heroImage.fluid}
          />
        </Card>
      </Fragment>
    )
  }
}

export default PostCard
