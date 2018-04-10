import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Form from './components/Form';
import Title from './components/Title';
import Weather from './components/Weather';
import './App.css';
require('dotenv').config();

class App extends Component {
  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    minTemp: null,
    maxTemp: null,
    error: null
  };
  getWeather = async event => {
    event.preventDefault();

    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${
      process.env.API_KEY
    }&units=metric`;

    const api_call = await fetch(url);

    const data = await api_call.json();
    console.log(data);

    if (city && country && data.cod !== '404') {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
        error: ''
      });
    } else {
      this.setState({
        temperature: null,
        city: null,
        country: null,
        humidity: null,
        description: null,
        minTemp: null,
        maxTemp: null,
        error: 'Give me a valid city and country!'
      });
    }
  };
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <Grid container spacing={0}>
            <Grid item xs={5}>
              <Title />
            </Grid>
            <Grid item xs={7} className="information-container">
              <Form getWeather={this.getWeather} />
              <Weather
                temperature={this.state.temperature}
                humidity={this.state.humidity}
                country={this.state.country}
                description={this.state.description}
                city={this.state.city}
                minTemp={this.state.minTemp}
                maxTemp={this.state.maxTemp}
                error={this.state.error}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
