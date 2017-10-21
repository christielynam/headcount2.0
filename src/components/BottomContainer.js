import React from 'react'
import DataCard from './DataCard'
import PropTypes from 'prop-types'

const BottomContainer = ({ schoolData, handleClick }) => {

  const cardList = schoolData.map( object =>
    <DataCard
        key={object.location}
        location={object.location}
        data={object.data}
        clicked={object.clicked}
        handleClick={handleClick}
    /> )

    return (
      <div className='bottom-container'>
        {cardList}
      </div>
    )
}

BottomContainer.propTypes = {
  schoolData: PropTypes.array,
  handleClick: PropTypes.func,
}

export default BottomContainer
