import styled from 'styled-components'
import Modal from 'styled-react-modal'

export const StyledModal = Modal.styled`
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.12),
    0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.gray100};
  margin: auto;
  overflow: hidden;
  animation-name: modalFade;
  animation-duration: 0.5s;

  @keyframes modalFade {
    from {
      transform: translateY(-12%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (min-width: 700px) {
    width: 75%;
  }

  @media (min-width: 900px) {
    width: 55%;
  }
`

export const Button = styled.button`
  margin-top: 20px;
  right: 20px;
  top: 0;
  position: fixed;
  transition: all 0.3s ease;
  opacity: 0.7;

  -webkit-animation: buttonFade 0.9s 1;
  -moz-animation: buttonFade 0.9s 1;
  -o-animation: buttonFade 0.9s 1;
  animation: buttonFade 0.9s 1;

  @-webkit-keyframes buttonFade {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0.8;
    }
  }
  @-moz-keyframes buttonFade {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0.8;
    }
  }
  @-o-keyframes buttonFade {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0.8;
    }
  }
  @keyframes buttonFade {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0.8;
    }
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`

export const Footer = styled.div`
  display: none;
  align-items: center;
  background-color: ${props => props.theme.colors.secondaryBackground};
  padding: 20px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;

  @media (min-width: 600px) {
    display: flex;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 22px;
  letter-spacing: 0.4px;
  font-weight: 600;
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.body};
`

export const IconContainer = styled.div`
  display: flex;
  margin-right: 12px;
  border-radius: 100%;
  background-color: ${props => props.theme.colors.accentGrey};
  padding: 10px;
`

export const SubTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.gray500};
  margin-right: auto;
  margin-top: 5px;
`

export const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  border-radius: 32px;
  padding: 10px 26px;
  border: 2px solid ${props => props.theme.colors.gray200};
  background-color: ${props => props.theme.colors.btnBackground};
  font-family: ${props => props.theme.fonts.body};
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.btnColor};
  letter-spacing: 0.3px;
  transition: 0.3s all ease;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.tertiaryBackground};
  }
`

export const Link = styled.a`
  text-decoration: none;
  margin-left: auto;
`
