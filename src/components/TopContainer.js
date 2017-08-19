import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataCard from './DataCard';

const TopContainer = ({ comparedData, handleClick }) => {

  const topCardzStylez = {
    border: '10 solid #FF9F1C',
  }

  const comparedList = comparedData.map( object =>
    <DataCard
      key={object.location}
      location={object.location}
      data={object.data}
      handleClick={handleClick}
      style={topCardzStylez}
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
