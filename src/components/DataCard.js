import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DataCard = ({ location, data }) => {

  const yearKeys = Object.keys(data)
    return (
      <div className='data-card'>
        <h3 className='school-district'>{location}</h3>
        {
          yearKeys.map( (year, i) => <p className='school-data' key={i}>{year} : {data[year]}</p> )
        }
      </div>
    );
}

DataCard.propTypes = {
  location: PropTypes.string,
  data: PropTypes.object
}

export default DataCard;
