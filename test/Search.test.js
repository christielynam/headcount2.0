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

  it('should render an input field', () => {
    expect(wrapper.find('input').length).toEqual(1)
  })

  it('should have a default state', () => {
    expect(wrapper.state().input).toEqual('')
  })

  it('should let us change state', () => {
    wrapper = mount(<Search search={jest.fn()} />)
    const input = wrapper.find('input')
    input.simulate('change', {target: {value: 'abc'}})

    expect(wrapper.state().input).toEqual('abc')
  })
  
})
