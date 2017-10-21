import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ search, searchQuery }) => {
  return (
    <div>
      <input
        value={searchQuery}
        placeholder='Search a location'
        onChange={(e) => search(e.target.value)}
      />
    </div>
  )
}

Search.propTypes = {
  search: PropTypes.func,
  searchQuery: PropTypes.string,
}

export default Search
