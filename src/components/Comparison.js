import React, { Component } from 'react';
import DataCard from './DataCard';
import PropTypes from 'prop-types';

const Comparison = ({ comparedData, compareAverages }) => {

  const comparedAverages = comparedData.map(obj => {
    return (<article key={obj.location}>
      <h3>{obj.location}</h3>
      <p>{obj.average}</p>
    </article>)
  })

  const ratio = (compareAverages(comparedData[0].location, comparedData[1].location)).compared

  // const ratio = Math.round((comparedData[0].average / comparedData[1].average) * 1000) / 1000

    return (
      <div className='comparison'>
        <section className='top-section'>
          {comparedAverages}
        </section>
        <section className='ratio'>
          <h3>Ratio: </h3>
          <p>{ratio}</p>
        </section>
      </div>
    );
}

Comparison.propTypes = {
  comparedData: PropTypes.array

}

export default Comparison;
