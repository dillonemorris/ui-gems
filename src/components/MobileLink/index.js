import React from 'react'
import { ModalButton, Link } from './style'
import ModalIcon from '../../images/ModalIcon'

const MobileLink = ({ link }) => {
  return (
    <div>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <ModalButton>
          <ModalIcon />
          Visit site
        </ModalButton>
      </Link>
    </div>
  )
}

export default MobileLink
