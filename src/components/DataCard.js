import React from 'react'
import PropTypes from 'prop-types'

const DataCard = ({ location, data, clicked, handleClick }) => {

  const yearKeys = Object.keys(data)
  const cardContent = yearKeys.map( (year, i) =>
    data[year] >= 0.5 ?
      <li className='school-data'
          style={{color: '#E71D36'}}
          key={i}>
          <span className='year'>{year}</span>
          <span className='percentage'>{data[year]}</span>
      </li>
      :
      <li className='school-data'
          key={i}>
          <span className='year'>{year}</span>
          <span className='percentage'>{data[year]}</span>
      </li> )

  const toggleSelected = clicked ? 'selected-data-card' : 'data-card'

  return (
      <div className={toggleSelected}
           onClick={ () => handleClick(location) }
      >
        <h3 className='school-district'>{location}</h3>
        <ul className='data-list'>{cardContent}</ul>
      </div>
  )
}

DataCard.propTypes = {
  location: PropTypes.string,
  data: PropTypes.object,
  clicked: PropTypes.bool,
  handleClick: PropTypes.func,
}

export default DataCard
