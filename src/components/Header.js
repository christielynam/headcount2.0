import React, { Component } from 'react';
import Search from './Search';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
      <div className='header'>
        <h1 className='header-title'>Headcount 2.0... School is Kewl</h1>
        <Search search={props.search} />
      </div>
    );
}

Header.propTypes = {
  search: PropTypes.func
}

export default Header;
