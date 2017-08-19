import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataCard from './DataCard';

const TopContainer = ({ comparedData, handleClick }) => {

  const comparedList = comparedData.map( object =>
    <DataCard
      key={object.location}
      location={object.location}
      data={object.data}
      handleClick={handleClick}
    /> )

    return (
      <div className='top-container'>
        {comparedList}
      </div>
    );
}

TopContainer.propTypes = {
  comparedData: PropTypes.array,
  handleClick: PropTypes.func,
}

export default TopContainer;
