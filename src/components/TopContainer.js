import React from 'react'
import PropTypes from 'prop-types'
import DataCard from './DataCard'
import Comparison from './Comparison'

const TopContainer = ({ comparedData, handleClick, compareAverages }) => {

  const comparedList = comparedData.map( object =>
    <div className='slide'
         key={object.location}
    >
      <DataCard
        location={object.location}
        data={object.data}
        handleClick={handleClick}
        />
    </div>)

    return (
      <div className='top-container'>
        {comparedList}
        { (comparedData.length === 2) &&
        <div>
          <Comparison
            comparedData={comparedData}
            compareAverages={compareAverages} />
        </div> }
      </div>
    )
}

TopContainer.propTypes = {
  comparedData: PropTypes.array,
  compareAverages: PropTypes.func,
  handleClick: PropTypes.func,
}

export default TopContainer
