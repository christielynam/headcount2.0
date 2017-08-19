import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, input }) => {
  return (
    <div>
      <input
        value={input}
        placeholder='Search a location'
        onChange={(e) => search(e.target.value)}
      />
    </div>
  );
}

Search.propTypes = {
  search: PropTypes.func,
  input: PropTypes.string,
}

export default Search;
