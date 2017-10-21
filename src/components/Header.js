import React from 'react'
import Search from './Search'
import PropTypes from 'prop-types'

const Header = ({ search, searchQuery }) => {

    return (
      <div className='header'>
        <h1 className='header-title'>Headcount 2.0... School is Kewl</h1>
        <Search
          search={search}
          searchQuery={searchQuery}
        />
      </div>
    )
}

Header.propTypes = {
  search: PropTypes.func,
  searchQuery: PropTypes.string,
}

export default Header
