import React from 'react'
import { mount, shallow } from 'enzyme'
import DataCard from '../src/components/DataCard'
import mockData from '../testHelpers/mockData'

describe('DataCard tests', () => {
  let wrapper
  const mockObject = mockData[0]

  beforeEach( () => {
    wrapper = shallow(<DataCard key={mockObject.location} location={mockObject.location} data={mockObject.data} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render a div with className of dataCard', () => {
    expect(wrapper.find('.data-card').length).toEqual(1)
  })

  it('should render an h3 tag', () => {
    const district = wrapper.find('.school-district')
    expect(district.text()).toEqual(mockObject.location)
  })

  it('should render an array of school data', () => {
    const schoolData = wrapper.find('.school-data')
    expect(schoolData.length).toEqual(11)
  })
})
