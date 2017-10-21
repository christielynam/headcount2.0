import React from 'react'
import { mount, shallow } from 'enzyme'
import App from '../src/components/App'

describe('App tests', () => {
  let wrapper

  beforeEach( () => {
    wrapper = shallow(<App />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('renders all appropriate components', () => {
    expect(wrapper.find('Header').length).toEqual(1)
    expect(wrapper.find('TopContainer').length).toEqual(1)
    expect(wrapper.find('BottomContainer').length).toEqual(1)
  })

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      input: '',
      data: [],
      comparedData: []
    })
  })

  it('should run componentDidMount after mounting', () => {
    wrapper.instance().componentDidMount = jest.fn()
    wrapper.instance().componentDidMount()
    expect(wrapper.instance().componentDidMount).toHaveBeenCalled()
  })

  it('should change state on componentDidMount', () => {
    expect(wrapper.state()).toEqual({
      input: '',
      data: [],
      comparedData: []
    })
    wrapper.instance().componentDidMount();
    expect(wrapper.state().data.length).toEqual(181);
  })

  it('should change state when searchLocation has been run', () => {
    wrapper = mount(<App />)
    const searchInput = wrapper.find('input')
    searchInput.simulate('change', {target: {value: 'colorado'}})
    expect(wrapper.state().input).toEqual('colorado')
    expect(wrapper.state().data.length).toEqual(2)
  })

  it('should toggle the clicked property of a DataCard when handleClick has been run', () => {
    wrapper = mount(<App />)
    const dataCard = wrapper.find('DataCard').get(0)
    wrapper.instance().handleClick(dataCard.props.location)
    expect(dataCard.props.clicked).toEqual(true)

    wrapper.instance().handleClick(dataCard.props.location)
    expect(dataCard.props.clicked).toEqual(false)
  })

  it('should change state when handleClick has been run', () => {
    expect(wrapper.state()).toEqual({
      input: '',
      data: [],
      comparedData: []
    })

    wrapper = mount(<App />)
    const dataCard = wrapper.find('DataCard').get(0)
    wrapper.instance().handleClick(dataCard.props.location)
    expect(wrapper.state().comparedData.length).toEqual(1)

    const dataCard2 = wrapper.find('DataCard').nodes[3].props
    wrapper.instance().handleClick(dataCard2.location)
    expect(wrapper.state().comparedData.length).toEqual(2);
  })

  it('should limit the comparedData array to 2 items', () => {
    expect(wrapper.state()).toEqual({
      input: '',
      data: [],
      comparedData: []
    })

    wrapper = mount(<App />)
    const dataCard = wrapper.find('DataCard').get(0)
    wrapper.instance().handleClick(dataCard.props.location)
    expect(wrapper.state().comparedData.length).toEqual(1)

    const dataCard2 = wrapper.find('DataCard').nodes[3].props
    wrapper.instance().handleClick(dataCard2.location)
    expect(wrapper.state().comparedData.length).toEqual(2)

    const dataCard3 = wrapper.find('DataCard').nodes[5].props
    wrapper.instance().handleClick(dataCard3.location)
    expect(wrapper.state().comparedData.length).toEqual(2)
  })

})
