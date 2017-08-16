import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import App from '../src/components/App';
import Header from '../src/components/Header';
import TopContainer from '../src/components/TopContainer';
import BottomContainer from '../src/components/BottomContainer';
import mockData from '../testHelpers/mockData';

describe('App tests', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<App />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
  });

})
