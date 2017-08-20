import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import DataCard from '../src/components/DataCard';
import TopContainer from '../src/components/TopContainer';
import mockData from '../testHelpers/mockData';

describe('TopContainer tests', () => {
  let wrapper;
  const mockArray =  [
    { location: 'COLORADO',
      average: 0.53,
      data:
       { '2004': 0.24,
         '2005': 0.278,
         '2006': 0.337,
         '2007': 0.395,
         '2008': 0.536,
         '2009': 0.598,
         '2010': 0.64,
         '2011': 0.672,
         '2012': 0.695,
         '2013': 0.703,
         '2014': 0.741 }
    },
    { location: 'ACADEMY 20',
      average: 0.407,
      data:
       { '2004': 0.302,
         '2005': 0.267,
         '2006': 0.354,
         '2007': 0.392,
         '2008': 0.385,
         '2009': 0.39,
         '2010': 0.436,
         '2011': 0.489,
         '2012': 0.479,
         '2013': 0.488,
         '2014': 0.49 }
    }
  ]

  beforeEach( () => {
    wrapper = shallow(<TopContainer
      comparedData={ mockArray }
      handleClick={ jest.fn() }
      compareAverages={ jest.fn() } />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render the correct amount of data cards', () => {
    const dataCards = wrapper.find('DataCard')

    expect(dataCards.length).toEqual(2);
  })

  it('should render 1 comparison card if there are 2 items in comparedData array', () => {
    expect(wrapper.find('Comparison').length).toEqual(1)
  })

  it('should only render 1 DataCard if there is only 1 item in the comparedData array', () => {
    const singleMockArray = [
      { location: 'COLORADO',
        average: 0.53,
        data:
         { '2004': 0.24,
           '2005': 0.278,
           '2006': 0.337,
           '2007': 0.395,
           '2008': 0.536,
           '2009': 0.598,
           '2010': 0.64,
           '2011': 0.672,
           '2012': 0.695,
           '2013': 0.703,
           '2014': 0.741 }
      },
    ]

    wrapper = shallow(<TopContainer comparedData={singleMockArray} />)

    expect(wrapper.find('DataCard').length).toEqual(1)
    expect(wrapper.find('Comparison').length).toEqual(0)
  })

})
