import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import filters from '../data/filters'

const Container = styled.div`
  width: 100%;
  padding: 0px 0px 0px 0px;
  background-color: #fff;
  box-shadow: 0 16px 16px rgba(103, 110, 144, 0.05),
    0 8px 8px rgba(103, 110, 144, 0.05), 0 4px 4px rgba(103, 110, 144, 0.05),
    0 2px 2px rgba(103, 110, 144, 0.05);
  margin-top: 0px;

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
  color: ${props => props.theme.colors.gray800};
  font-family: ${props => props.theme.fonts.body};
  font-size: 14px;
  font-weight: 500;
  /* letter-spacing: 0.1px; */

  :hover {
    cursor: pointer;
  }

  .active {
    border-bottom: 3px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
`

const Filter = styled.div`
  padding: 26px 20px 24px 20px;
`

const FilterBar = ({ handleFilterClick, activeFilter, isScrolled }) => {
  return (
    <Container isScrolled={isScrolled}>
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
