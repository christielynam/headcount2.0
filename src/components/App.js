import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import TopContainer from './TopContainer';
import BottomContainer from './BottomContainer';
import DistrictRepository from '../helper';
import kinderData from '../../data/kindergartners_in_full_day_program';
const district = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      data: [],
      comparedData: []
    }
    this.searchLocation = this.searchLocation.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({ data: district.findAllMatches() })
  }

  searchLocation(string) {
    this.setState({
      input: string,
      data: district.findAllMatches(string)
    })
  }

  toggleClicked(object) {
    const match = district.findByName(object.location)
    match.clicked = !match.clicked
    return match
  }

  handleClick(locationString) {
    const locationMatch = this.state.comparedData.filter( object => object.location === locationString )

    if (locationMatch.length === 1) {
      const locationIndex = this.state.comparedData.indexOf(locationMatch[0])
      const splicedArray = this.state.comparedData.splice(locationIndex, 1)
      this.toggleClicked(splicedArray[0])
    } else if (this.state.comparedData.length === 2) {
      const foundLocationObj = district.findByName(locationString)
      const shiftedObj = this.state.comparedData.shift()
      this.toggleClicked(shiftedObj)
      this.state.comparedData.push(this.toggleClicked(foundLocationObj))
    } else {
      const foundLocationObj = district.findByName(locationString)
      this.state.comparedData.push(this.toggleClicked(foundLocationObj))
    }
    this.setState({
      input: '',
      data: district.findAllMatches(),
      comparedData: this.state.comparedData
    })
  }

  render() {

    return (
      <div>
        <Header
          search={this.searchLocation}
          input={this.state.input}
        />
        <TopContainer
          comparedData={this.state.comparedData}
          handleClick={this.handleClick}
          compareAverages={district.compareDistrictAverages.bind(district)}
        />
        <BottomContainer
          schoolData={this.state.data} handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
