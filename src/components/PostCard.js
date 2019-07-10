import React, { useState, Fragment } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Modal from './Modal'

const Card = styled.div`
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

  &:hover {
    box-shadow: 0 20px 20px rgba(103, 110, 144, 0.08),
      0 12px 12px rgba(103, 110, 144, 0.08), 0 4px 4px rgba(103, 110, 144, 0.08),
      0 2px 2px rgba(103, 110, 144, 0.08);
    cursor: pointer;
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

  const toggleModal = () => {
    setOpen(!isOpen)
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
      <Card onClick={toggleModal}>
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

export default PostCard
