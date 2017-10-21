import React from 'react'
import ReactDOM from 'react-dom'
import { mount, shallow } from 'enzyme'
import DataCard from '../src/components/DataCard'
import BottomContainer from '../src/components/BottomContainer'
import mockData from '../testHelpers/mockData'

describe('BottomContainer tests', () => {
  let wrapper

  beforeEach( () => {
    wrapper = shallow(<BottomContainer schoolData={mockData} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render the correct amount of data cards', () => {
    const dataCards = wrapper.find('DataCard')

    expect(dataCards.length).toEqual(100)
  })

})
