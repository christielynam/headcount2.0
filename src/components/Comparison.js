import React, { Component } from 'react';
import DataCard from './DataCard';
import PropTypes from 'prop-types';

const Comparison = ({ comparedData }) => {

  const comparedAverages = comparedData.map(obj => {
    return (<article key={obj.location}>
      <h3>{obj.location}</h3>
      <p>{obj.average}</p>
    </article>)
  })

    return (
      <div className='comparison'>
        <section className='top-section'>
          {comparedAverages}
        </section>
        <section className='ratio'>

        </section>
      </div>
    );
}

Comparison.propTypes = {
  comparedData: PropTypes.array

}

export default Comparison;
