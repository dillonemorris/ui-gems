import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Modal from 'styled-react-modal'

const Card = styled.div`
  box-shadow: 0 16px 16px rgba(103, 110, 144, 0.05),
    0 8px 8px rgba(103, 110, 144, 0.05), 0 4px 4px rgba(103, 110, 144, 0.05),
    0 2px 2px rgba(103, 110, 144, 0.05);
  border-radius: 6px;
  transition: 0.3s all ease;

  :hover {
    box-shadow: 0 20px 20px rgba(103, 110, 144, 0.08),
      0 12px 12px rgba(103, 110, 144, 0.08), 0 4px 4px rgba(103, 110, 144, 0.08),
      0 2px 2px rgba(103, 110, 144, 0.08);
  }
`

const Img = styled.img`
  height: 100%;
  border-radius: 6px;

  :hover {
    cursor: pointer;
  }
`

const ModalImg = styled.img`
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  height: 100%;
`

const StyledModal = Modal.styled`
  box-shadow: 0 0 0 0.5px rgba(3,42,60,.2), 0 0 0 1px rgba(3,42,60,.1), 0 14px 28px rgba(3,42,60,.25), 0 10px 10px rgba(3,42,60,.22);
  border-radius: 6px;
  width: 55%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.gray100};
  margin: auto;
  animation-name: modalFade;
  animation-duration: .5s;

  @keyframes modalFade {
    from {transform: translateY(-10%);opacity: 0;}
  to {transform: translateY(0);opacity: 1;}
  }
`

const Button = styled.button`
  margin-top: 40px;
  right: 80px;
  top: 0;
  position: fixed;

  animation-name: modalFade;
  animation-duration: 0.6s;

  @keyframes modalFade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &:hover {
    cursor: pointer;
  }
`

const Header = styled.div`
  background-color: #f4f4f4;
  padding: 20px 0px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
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
    const { image, title } = this.props
    return (
      <Fragment>
        <StyledModal
          className="box"
          pose={this.state.isVisible ? 'visible' : 'hidden'}
          allowScroll
          isOpen={this.state.isOpen}
          onBackgroundClick={this.toggleModal}
          onEscapeKeydown={this.toggleModal}
        >
          <Header>I am a modal!</Header>
          <ModalImg src={image.src} alt={title} />
          <Button onClick={this.toggleModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="#5A5B5C"
            >
              <path d="M4.93 19.07A10 10 0 1 1 19.07 4.93 10 10 0 0 1 4.93 19.07zm1.41-1.41A8 8 0 1 0 17.66 6.34 8 8 0 0 0 6.34 17.66zM13.41 12l1.42 1.41a1 1 0 1 1-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 1 1-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 1 1 1.42-1.42L12 10.6l1.41-1.42a1 1 0 1 1 1.42 1.42L13.4 12z" />
            </svg>
          </Button>
        </StyledModal>
        <Card onClick={this.toggleModal}>
          <Img src={image.src} alt={title} />
        </Card>
      </Fragment>
    )
  }
}

export default PostCard
