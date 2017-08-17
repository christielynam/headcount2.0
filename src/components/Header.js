import React, { Component } from 'react';
import Search from './Search';
import PropTypes from 'prop-types';

const Header = (props) => {

    const imageStyles = {
      backgroundImage: 'url("/assets/colored-pencils-png.png")',
      // backgroundImage: 'url("https://cdn.pixabay.com/photo/2012/04/14/16/54/color-pencils-34595_960_720.pn")',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
    }
    return (
      <div className='header'
           style={imageStyles}
           >
        <h1 className='header-title'>Headcount 2.0... School is Kewl</h1>
        <Search search={props.search} />
      </div>
    );
}

Header.propTypes = {
  search: PropTypes.func
}

export default Header;
