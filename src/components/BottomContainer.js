import React, { Component } from 'react';
import DataCard from './DataCard';
import PropTypes from 'prop-types';

const BottomContainer = ({ schoolData }) => {

    return (
      <div className='bottom-container'>

      {
        schoolData.map( object =>
          <DataCard
              key={object.location}
              location={object.location}
              data={object.data}
          /> )
      }

      </div>
    );
}

BottomContainer.propTypes = {
  schoolData: PropTypes.array
}

export default BottomContainer;
