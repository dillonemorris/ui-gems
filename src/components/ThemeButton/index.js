import React from 'react'
import { ButtonContainer, Button } from './style'

const ThemeButton = ({ title, handleClick, isLight }) => {
  return (
    <div>
      <ButtonContainer>
        <Button isLight={isLight} onClick={handleClick}>
          {title}
        </Button>
      </ButtonContainer>
    </div>
  )
}

export default ThemeButton
