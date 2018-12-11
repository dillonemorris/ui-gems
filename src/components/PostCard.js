import React from 'react'
import styled from 'styled-components'

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
  border-radius: 6px;
  height: 100%;

  :hover {
    cursor: pointer;
  }
`

const PostCard = ({ image, title }) => {
  return (
    <Card>
      {console.log(image)}
      <Img src={image.src} alt="" />
    </Card>
  )
}

export default PostCard
