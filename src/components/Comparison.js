import React from 'react';
import PropTypes from 'prop-types';

const Comparison = ({ comparedData, compareAverages }) => {

  const comparedObj = compareAverages(comparedData[0].location, comparedData[1].location)
  const ratio = comparedObj.compared
  const comparedAverages = comparedData.map(obj => {
    return (
      <article className='school-averages' key={obj.location}>
        <h3>{obj.location}</h3>
        <p>{comparedObj[obj.location]}</p>
      </article>)
  })

  return (
    <div className='comparison slide'>
      <section className='top-section'>
        {comparedAverages}
      </section>
      <section className='ratio'>
        <h3>Ratio</h3>
        <p>{ratio}</p>
      </section>
    </div>
  )
}

Comparison.propTypes = {
  comparedData: PropTypes.array,
  compareAverages: PropTypes.func,
}

export default Comparison;
