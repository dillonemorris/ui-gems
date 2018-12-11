import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 8px 0px;
  box-shadow: 0 16px 16px rgba(103, 110, 144, 0.05),
    0 8px 8px rgba(103, 110, 144, 0.05), 0 4px 4px rgba(103, 110, 144, 0.05),
    0 2px 2px rgba(103, 110, 144, 0.05);
`

const Inner = styled.div`
  max-width: 1080px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  grid-template-columns: repeat(9, 1fr);
  margin: auto;
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.body};
  font-size: 15px;
  font-weight: 400;

  :hover {
    cursor: pointer;
  }
`

const Filter = styled.div`
  /* border-bottom: 3px solid ${props => props.theme.colors.primary}; */
`

const filters = [
  'Sign in',
  'Hero',
  'Pricing',
  'Features',
  'FAQs',
  'Blog',
  'Tables',
  'Modal',
  'Checkout',
]

const FilterBar = ({ handleFilterClick, activeTab }) => {
  return (
    <Container>
      <Inner>
        {filters.map(filter => (
          <Filter key={filter} onClick={() => handleFilterClick(filter)}>
            {filter}
          </Filter>
        ))}
      </Inner>
    </Container>
  )
}

export default FilterBar
