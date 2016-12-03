import React, { Component } from 'react';

class LocationInput extends Component {
  constructor(props) {
    super(props);

    this.state = { city: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <form onClick={this.handleSubmit} className = "location-input">
        <input type="text" value={this.state.city} onChange={(event) => this.onInputChange(event.target.value)} />
        <button>Click</button>
      </form>
    );
  }

  onInputChange(city) {
    this.setState({city});
    // this.props.onSearchCityChange(city);
  }
  handleSubmit(event) {
    event.preventDefault();
    const city = this.state.city;
    this.props.onSearchCityChange(city);
  }
}

export default LocationInput;
