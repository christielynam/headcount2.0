import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    }, () => {
      this.props.search(this.state.input)
    })
  }

  render() {
    return (
      <div>
        <input placeholder='Search a location' onChange={this.handleChange} />
      </div>
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func
}

export default Search;
