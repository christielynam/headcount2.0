import React, { Component } from 'react';
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
  }

  componentDidMount() {
    this.setState({ data: district.findAllMatches() })
  }
  render() {
    return (
      <div>
        <Header />
        <BottomContainer schoolData={this.state.data} />
      </div>
    );
  }
}

export default App;
