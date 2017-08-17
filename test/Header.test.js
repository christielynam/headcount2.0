import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Header from '../src/components/Header';
import Search from '../src/components/Search';
import mockData from '../testHelpers/mockData';

describe('Header tests', () => {
  let wrapper;
  const props = { search: jest.fn() }

  beforeEach( () => {
    wrapper = mount(<Header search={ jest.fn() } />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render an h1 tag', () => {
    const title = wrapper.find('.header-title')

    expect(title.text()).toEqual('Headcount 2.0... School is Kewl');
  })

  it('should render a search component', () => {
    expect(wrapper.find('Search').length).toEqual(1);
  })

  it('should take in a function as a property', () => {
    console.log(wrapper.find('Search').prop('search'));
    expect(wrapper.find('Search').prop('search')._isMockFunction).toBe(true)
  })

})
