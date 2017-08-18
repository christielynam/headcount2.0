import React, { Component } from 'react';
import DataCard from './DataCard';
import PropTypes from 'prop-types';

const BottomContainer = ({ schoolData, handleClick }) => {

  const cardList = schoolData.map( object =>
    <DataCard
        key={object.location}
        location={object.location}
        data={object.data}
        handleClick={handleClick}
    /> )

    return (
      <div className='bottom-container'>
        {cardList}
      </div>
    );
}

BottomContainer.propTypes = {
  schoolData: PropTypes.array
}

export default BottomContainer;
