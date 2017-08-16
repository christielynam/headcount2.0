import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Search from '../src/components/Search';
import mockData from '../testHelpers/mockData';

describe('Search tests', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<Search />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
  // it('should render the correct amount of data cards', () => {
  //   const dataCards = wrapper.find('DataCard')
  //
  //   expect(dataCards.length).toEqual(100);
  // })

})
