import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import DataCard from '../src/components/DataCard';
import BottomContainer from '../src/components/BottomContainer';
import mockData from '../testHelpers/mockData';

describe('DataCard tests', () => {
  let wrapper;
  const mockObject = mockData[0];

  beforeEach( () => {
    wrapper = shallow(<DataCard key={mockObject.location} location={mockObject.location} data={mockObject.data} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  // it('should render a div with className of dataCard', () => {
  //
  // })

  it('should render an h3 tag', () => {
    const district = wrapper.find('.school-district')

    expect(district.text()).toEqual(mockObject.location);
  })

})
