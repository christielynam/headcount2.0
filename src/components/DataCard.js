import React, { Component } from 'react';


const DataCard = ({ location, data }) => {

  const yearKeys = Object.keys(data)
    return (
      <div>
        <h3 className='schoolDistrict'>{location}</h3>
        {
          yearKeys.map( key => <p className='schoolData'>{key} : {data[key]}</p> )
        }

      </div>
    );
}

export default DataCard;
