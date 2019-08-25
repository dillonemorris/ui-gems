import React from 'react'
import classNames from 'classnames'
import { Container, Inner, Filter } from './style'
import filters from '../../data/filters'

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
