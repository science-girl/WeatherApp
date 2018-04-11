import React from 'react';

const Weather = props => {
  return (
    <div className="weather__info">
      {props.temperature && (
        <p className="weather__key">
          Temperature:<span> {props.temperature}</span>
        </p>
      )}
      {props.description && (
        <p className="weather__key">
          Conditions: <span>{props.description}</span>
        </p>
      )}
      {props.humidity && (
        <p className="weather__key">
          Humidity:<span> {props.humidity}</span>
        </p>
      )}
      {props.minTemp && (
        <p className="weather__key">
          Minimum Temperature: <span>{props.minTemp}</span>
        </p>
      )}
      {props.maxTemp && (
        <p className="weather__key">
          <span>Maximum Temperature: {props.maxTemp}</span>
        </p>
      )}
      {props.error && <p className="weather__key">Error: {props.error}</p>}
    </div>
  );
};

export default Weather;
