import React, { Component } from 'react';
import Search from './Search';
import PropTypes from 'prop-types';


const Header = (props) => {
    return (
      <div>
        <Search search={props.search} />
        <h1>Headcount 2.0</h1>
      </div>
    );
}

Header.propTypes = {
  search: PropTypes.func
}

export default Header;
