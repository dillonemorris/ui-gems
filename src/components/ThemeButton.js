import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;

  @media (min-width: 855px) {
    margin-top: 24px;
    margin-right: 72px;
  }
`

const Button = styled.button`
  background-color: ${props => props.theme.colors.filterBar};
  box-shadow: ${props => props.theme.boxShadow.default};
  border-radius: 32px;
  padding: 10px 18px;
  color: ${props => props.theme.colors.accent};
  margin-left: auto;
  letter-spacing: 0.3px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 855px) {
    margin-left: 0;
  }
`

const ThemeButton = ({ title, handleClick }) => {
  return (
    <div>
      <ButtonContainer>
        <Button onClick={handleClick}>{title}</Button>
      </ButtonContainer>
    </div>
  )
}

export default ThemeButton
