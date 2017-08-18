import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import BottomContainer from './BottomContainer';
import DistrictRepository from '../helper';
import kinderData from '../../data/kindergartners_in_full_day_program'
const district = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super()
    this.state = {
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
      data: district.findAllMatches(string)
    })
  }

  handleClick(location) {
    const foundLocation = district.findByName(location)
    this.state.comparedData.push(foundLocation)
    this.setState({
      comparedData: this.state.comparedData
    })
  }

  render() {
    return (
      <div>
        <Header search={this.searchLocation} />
        <BottomContainer schoolData={this.state.data} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
