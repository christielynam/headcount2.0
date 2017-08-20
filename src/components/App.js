import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import TopContainer from './TopContainer';
import BottomContainer from './BottomContainer';
import DistrictRepository from '../helper';
import kinderData from '../../data/kindergartners_in_full_day_program';
const district = new DistrictRepository(kinderData)
// add district as a property to app constructor, and when changing the clicked true/false property, target the original district repository object??

class App extends Component {
  constructor() {
    super()
    // this.district = new DistrictRepository(kinderData)
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

  // cloneObject(obj) {
  //   return Object.assign({}, obj, {average: district.findAverage(obj.location)})
  // }

  toggleClicked(object) {

    // function takes in an object that was clicked on
    // manipulate the district object, run findByName method on the object.location (string to pass into findByName)
    // that method returns an object, which we can then change the clicked property to the opposite value
    console.log('argument passed in', object);
    const match = district.findByName(object.location)
    console.log('match', match)

    match.clicked = !match.clicked
    console.log('match.clicked', match);

    return match
  }

  handleClick(locationString) {

    const locationMatch = this.state.comparedData.filter( object => {
      if (object.location === locationString) {
        return object
      }
    })

    if (locationMatch.length === 1) {
      const locationIndex = this.state.comparedData.indexOf(locationMatch[0])

      const splicedArray = this.state.comparedData.splice(locationIndex, 1)
      this.toggleClicked(splicedArray[0])
      this.state.comparedData.splice(locationIndex, 1)

      this.setState({
        input: '',
        data: district.findAllMatches(),
        comparedData: this.state.comparedData
      })


    } else if (this.state.comparedData.length === 2) {
      const foundLocationObj = district.findByName(locationString)
      const shiftedObj = this.state.comparedData.shift()
      // debugger;
      // this.state.comparedData.shift()

      this.toggleClicked(shiftedObj)

      this.state.comparedData.push(this.toggleClicked(foundLocationObj))

      console.log(this.state.comparedData);

      this.setState({
        input: '',
        data: district.findAllMatches(),
        comparedData: this.state.comparedData
      })

    } else {
      const foundLocationObj = district.findByName(locationString)

      this.state.comparedData.push(this.toggleClicked(foundLocationObj))

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
