import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import TopContainer from './TopContainer';
import BottomContainer from './BottomContainer';
import DistrictRepository from '../helper';
import kinderData from '../../data/kindergartners_in_full_day_program'
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

  cloneObject(obj) {
    return Object.assign({}, obj, {average: district.findAverage(obj.location)})
  }

  handleClick(location) {
    const locationMatch = this.state.comparedData.filter( object => {
      if (object.location === location) {
        return object
      }
    })

    if (locationMatch.length === 1) {
      const locationIndex = this.state.comparedData.indexOf(locationMatch[0])
      let splicedObj = this.state.comparedData.splice(locationIndex, 1)

      this.state.comparedData.splice(locationIndex, 1)
      console.log('splicedObj', splicedObj);

      this.setState({
        input: '',
        data: district.findAllMatches(),
        comparedData: this.state.comparedData
      })
    } else if (this.state.comparedData.length === 2) {
      const foundLocation = district.findByName(location)
      const clonedLocation = this.cloneObject(foundLocation)
      this.state.comparedData.push(clonedLocation)
      this.state.comparedData.shift()
      this.setState({
        input: '',
        data: district.findAllMatches(),
        comparedData: this.state.comparedData
      })
    } else {
      const foundLocation = district.findByName(location)
      const clonedLocation = this.cloneObject(foundLocation)
      this.state.comparedData.push(clonedLocation)
      this.setState({
        input: '',
        data: district.findAllMatches(),
        comparedData: this.state.comparedData
      })
    }
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
