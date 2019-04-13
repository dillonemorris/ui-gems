import React from 'react'
import styled from 'styled-components'
import ModalIconLight from '../images/ModalIconLight'

const ModalButton = styled.button`
  display: flex;
  position: fixed;
  bottom: 100px;
  height: 60px;
  right: 5%;
  width: 90%;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  border-radius: 6px;
  padding: 10px 38px;
  background-color: ${props => props.theme.colors.gray100};
  font-family: ${props => props.theme.fonts.body};
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.gray700};
  letter-spacing: 0.3px;
  transition: 0.3s all ease;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.tertiaryBackground};
  }

  &:visited,
  &:focus {
    color: ${props => props.theme.colors.gray100};
    background-color: ${props => props.theme.colors.primary};
  }
`

const Link = styled.a`
  text-decoration: none;
`

const MobileLink = ({ link }) => {
  return (
    <div>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <ModalButton>
          <ModalIconLight />
          Visit site
        </ModalButton>
      </Link>
    </div>
  )
}

export default MobileLink
