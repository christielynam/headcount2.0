import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DataCard extends Component {
  constructor() {
    super()
    this.state = {
      clicked: false
    }
    this.toggleClass = this.toggleClass.bind(this)
  }

  toggleClass() {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const { location, data, handleClick, style } = this.props

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

    const toggleSelected = this.state.clicked ? 'selected-data-card' : 'data-card'

      return (
        <div onClick={this.toggleClass}>
          <div className={toggleSelected} style={style} onClick={ () => handleClick(location) }>
            <h3 className='school-district'>{location}</h3>
            {cardContent}
          </div>
        </div>
      );
  }
}


DataCard.propTypes = {
  location: PropTypes.string,
  data: PropTypes.object
}

export default DataCard;
