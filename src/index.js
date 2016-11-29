import React from 'react';
import ReactDOM from 'react-dom';

import LocationInput from './components/location_input';

const API_KEY = 'c691c22dbd26d013f884323a1acb58a0'; //open weather api key



const App = () => {
  return (
    <div>
      <LocationInput />
    </div>
  );
}




ReactDOM.render(<App />, document.querySelector('.container'));
