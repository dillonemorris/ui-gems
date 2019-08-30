import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  width: 100%;
  background-color: ${props => props.theme.colors.filterBar};
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;

  @media (min-width: 855px) {
    overflow-x: auto;
  }

  ${props =>
    props.isScrolled &&
    `position: fixed;
    top: 0;
    z-index: 2;
    padding-left: 20px;

    @media (min-width: 855px) {
    padding-left: 34px;
  }
    `};
`

export const Inner = styled.div`
  max-width: 1080px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px;
  grid-template-columns: repeat(9, 1fr);
  margin: auto;
  color: ${props => props.theme.colors.body};
  font-family: ${props => props.theme.fonts.body};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: .2px;
  transition: all 0.2s ease;

  @media (min-width: 855px) {
    font-size: 16px;
  }

  :hover {
    cursor: pointer;
  }

  .active {
    background-color: ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.primaryDark};
  }
`

export const Filter = styled.div`
  padding: 10px 18px;
  border-radius: 24px;
  white-space: nowrap;
  margin-left: 0px;
  margin: 0px 20px 0px 0px;
  transition: all 0.3s ease;

  :first-child {
    margin: 0px 20px 0px 0px;
  }

  :last-child {
    margin: 0px 20px 0px 0px;
  }

  @media (min-width: 855px) {
    margin: 0px;

    :last-child {
    margin: 0px 0px 0px 0px;
  }
  }

  :hover {
    color: ${props => props.theme.colors.primaryDark};
  }
`
