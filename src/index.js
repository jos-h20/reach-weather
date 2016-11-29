import React from 'react';
import ReactDOM from 'react-dom';

import Fetch from 'react-fetch';

import LocationInput from './components/location_input';

const API_KEY = 'c691c22dbd26d013f884323a1acb58a0'; //open weather api key



const App = () => {
  return (
    <div>
      <LocationInput />
      <Fetch url="http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c691c22dbd26d013f884323a1acb58a0">
        <TestComponent/>
      </Fetch>
    </div>
  );
}
class TestComponent extends React.Component{
  render(){
    console.log(this.props)
    return <div/>
  }
}



ReactDOM.render(<App />, document.querySelector('.container'));
