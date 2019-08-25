import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px;
  background-color: ${props => props.theme.colors.filterBar};
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
`

export const LogoText = styled.h3`
  color: ${props => props.theme.colors.accent};
  font-family: ${props => props.theme.fonts.secondary};
  letter-spacing: 0.6px;
  font-size: 20px;
  font-weight: 600;
  padding-left: 6px;
`
