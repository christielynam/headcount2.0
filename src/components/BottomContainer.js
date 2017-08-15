import React, { Component } from 'react';
import DataCard from './DataCard';

const BottomContainer = ({ schoolData }) => {

    return (
      <div>

      {
        schoolData.map( object =>
          <DataCard
              key={object.location}
              location={object.location}
              data={object.data}
          /> )
      }

      </div>
    );
}

export default BottomContainer;
