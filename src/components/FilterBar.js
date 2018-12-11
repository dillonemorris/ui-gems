import React from 'react'

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

const FilterBar = ({ handleFilterClick }) => {
  return (
    <div>
      {filters.map(filter => (
        <div key={filter} onClick={() => handleFilterClick(filter)}>
          {filter}
        </div>
      ))}
    </div>
  )
}

export default FilterBar
