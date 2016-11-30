import React from 'react';

const ReturnedWeather = ({ weather }) => {
  console.log(weather, "and shit");
  if (!weather) {
    return <div>Loading...</div>
  }
  return(

    <div className="weather-detail col-md-8">
      <div className="details">
        <div>{weather.name}</div>
        <div>{weather.main.temp}</div>
        <div>{weather.weather[0].description}</div>
      </div>
    </div>
  );
};

export default ReturnedWeather;
