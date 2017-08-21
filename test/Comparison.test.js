import React from 'react'
import { mount, shallow } from 'enzyme'
import Comparison from '../src/components/Comparison'
import DistrictRepository from '../src/helper'
import kinderData from '../data/kindergartners_in_full_day_program'

describe('Comparison tests', () => {
  let wrapper
  let mockArray
  let districtRepo

  beforeEach( () => {
    districtRepo = new DistrictRepository(kinderData)
    mockArray = [
      { location: 'COLORADO',
        clicked: true,
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
        clicked: true,
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
    wrapper = shallow(<Comparison
      comparedData={ mockArray }
      compareAverages={ districtRepo.compareDistrictAverages.bind(districtRepo) } />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render html elements with appropriate classNames', () => {
    expect(wrapper.find('.comparison').length).toEqual(1)
    expect(wrapper.find('.top-section').length).toEqual(1)
    expect(wrapper.find('.school-averages').length).toEqual(2)
    expect(wrapper.find('.ratio').length).toEqual(1)
  })

  it('should render the appropriate data', () => {
    expect(wrapper.find('h3').first().text()).toEqual('COLORADO')
    expect(wrapper.find('h3').last().text()).toEqual('Ratio: ')
    expect(wrapper.find('p').first().text()).toEqual('0.53')
    expect(wrapper.find('p').last().text()).toEqual('1.302')
  })

})
