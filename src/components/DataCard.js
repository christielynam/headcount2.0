import React from 'react';
import PropTypes from 'prop-types';

const DataCard = ({ location, data, clicked, handleClick }) => {

  const colorIndicator = {
    color: '#E71D36',
  }

  const yearKeys = Object.keys(data)
  const cardContent = yearKeys.map( (year, i) => {
    if (data[year] >= 0.5) {
      return <p className='school-data' style={colorIndicator} key={i}>{year} : {data[year]}</p>
    } else {
       return <p className='school-data' key={i}>{year} : {data[year]}</p>
    }
  })

  const toggleSelected = clicked ? 'selected-data-card' : 'data-card'

  return (
      <div className={toggleSelected} onClick={ () => handleClick(location) }>
        <h3 className='school-district'>{location}</h3>
        {cardContent}
      </div>
  );
}

DataCard.propTypes = {
  location: PropTypes.string,
  data: PropTypes.object,
  handleClick: PropTypes.func,
}

export default DataCard;
