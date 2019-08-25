import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  box-shadow: ${props => props.theme.boxShadow.default};
  border-radius: 6px;
  transition: 0.3s all ease;
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;
    box-shadow: ${props => props.theme.boxShadow.hover};
  }

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
`

export const Link = styled.a`
  text-decoration: none;
`

export const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  border-radius: 6px;
  padding: 6px 12px;
  border: 2px solid #edecf2;
  background-color: rgba(255, 255, 255, 0.3);
  font-family: ${props => props.theme.fonts.body};
  transition: 0.3s all ease;

  &:hover {
    cursor: pointer;
    background-color: #fafafa;
  }
`

export const CardOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.32);
  justify-content: space-between;
  transition: opacity 0.2s ease;
  display: flex;
  opacity: 0;

  @media (min-width: 855px) {
    ${props =>
      props.isMouseOver &&
      `
      display: flex;
      opacity: 1;
    `};
  }
`

export const Title = styled.div`
  font-size: 18px;
  letter-spacing: 0.4px;
  font-weight: 400;
  font-family: ${props => props.theme.fonts.secondary};
  color: #383740;
  align-self: flex-end;
  padding: 12px;
`

export const LinkContainer = styled.div`
  padding: 12px;
`
