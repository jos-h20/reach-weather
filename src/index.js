import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import Fetch from 'react-fetch';

import LocationInput from './components/location_input';
import ReturnedWeather from './components/returned_weather';

const API_KEY = 'c691c22dbd26d013f884323a1acb58a0'; //open weather api key



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { weather: null };
    this.citySearch("Portland");

  }

  citySearch(city) {
     city="Boston"
     return fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + API_KEY)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        weather: responseJson
      });
      console.log(this.state.weather)


    })

  }
  render() {
    return (
      <div>
        <ReturnedWeather
          weather={this.state.weather}
        />
      </div>
    );
  }
}




ReactDOM.render(<App />, document.querySelector('.container'));
