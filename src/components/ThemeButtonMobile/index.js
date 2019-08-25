import React from 'react'
import { ButtonContainer, Button } from './style'

const ThemeButtonMobile = ({ title, handleClick }) => {
  return (
    <div>
      <ButtonContainer>
        <Button onClick={handleClick}>{title}</Button>
      </ButtonContainer>
    </div>
  )
}

export default ThemeButtonMobile
