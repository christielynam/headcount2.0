import React, { Component } from 'react';
import Search from './Search';

const Header = (props) => {
    return (
      <div>
        <Search search={props.search} />
        <h1>Headcount 2.0</h1>
      </div>
    );
}

export default Header;
