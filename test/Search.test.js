import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Search from '../src/components/Search';
import mockData from '../testHelpers/mockData';

describe('Search tests', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = mount(<Search
      search={ jest.fn() }
      input={''} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render an input field', () => {
    expect(wrapper.find('input').length).toEqual(1)
  })

  it('should take in a function as a property', () => {
    expect(wrapper.prop('search')._isMockFunction).toBe(true)
  })

})
