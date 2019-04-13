import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import filters from '../data/filters'

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.secondaryBackground};
  box-shadow: ${props => props.theme.boxShadow.filterBar};
  margin-top: 0px;
  background-color: ${props => props.theme.colors.filterBar};
  overflow-x: scroll;
  padding: 20px 20px 20px 0px;

  @media (min-width: 855px) {
    padding: 20px;
  }

  ${props =>
    props.isScrolled &&
    `
    position: fixed;
    top: 0;
    z-index: 2;
`};
`

const Inner = styled.div`
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
  font-weight: 500;
  transition: all 0.2s ease;

  :hover {
    cursor: pointer;
  }

  .active {
    background-color: ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.primaryDark};
  }
`

const Filter = styled.div`
  padding: 10px 18px;
  border-radius: 24px;
  white-space: nowrap;
  margin-left: 0px;
  margin: 0px 20px 0px 0px;

  :first-child {
    margin: 0px 20px 0px 20px;
  }

  :last-child {
    margin: 0px 20px 0px 0px;
  }

  @media (min-width: 855px) {
    margin: 0px;
  }
`

const FilterBar = ({ handleFilterClick, activeFilter, isScrolled }) => {
  return (
    <Container id="filterBar" isScrolled={isScrolled}>
      <Inner>
        {filters.map(filter => (
          <Filter
            className={classNames({
              active: activeFilter === filter.name,
            })}
            key={filter.name}
            onClick={() => handleFilterClick(filter.name)}
          >
            {filter.name}
          </Filter>
        ))}
      </Inner>
    </Container>
  )
}

export default FilterBar
