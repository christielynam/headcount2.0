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
      data: []
    }
    this.searchLocation = this.searchLocation.bind(this)
  }

  componentDidMount() {
    this.setState({ data: district.findAllMatches() })
  }

  searchLocation(string) {
    this.setState({
      data: district.findAllMatches(string)
    })
  }

  render() {
    return (
      <div>
        <Header search={this.searchLocation} />
        <BottomContainer schoolData={this.state.data} />
      </div>
    );
  }
}

export default App;
