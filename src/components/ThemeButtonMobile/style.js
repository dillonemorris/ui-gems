import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;

  @media (min-width: 855px) {
    display: none;
  }
`

export const Button = styled.button`
  background-color: ${props => props.theme.colors.tertiaryBackground};
  box-shadow: ${props => props.theme.boxShadow.default};
  border-radius: 32px;
  padding: 10px 16px;
  font-size: 14px;
  color: ${props => props.theme.colors.accent};
  margin-left: auto;
  letter-spacing: 0.5px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 855px) {
    margin-left: 0;
  }
`
