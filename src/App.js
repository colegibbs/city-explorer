import React from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import GeoModal from './GeoModal';
import ErrorAlert from './ErrorAlert';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      weatherData: [],
      mapURL: '',
      city: '',
      showModal: false,
      errorResponse: '',
    }
  }
  handleCity = (event) => {
    this.setState({
      city: event.target.value,
    })
  }

  getCityData = async (event) => {
    try {
      event.preventDefault();
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city}&format=json`);
      let weatherData = await axios.get(`https://city-explorer-api-codefellows.herokuapp.com/weather?searchQuery=${this.state.city}`);
      this.setState({
        cityData: cityData.data[0],
        weatherData: weatherData.data,
        mapURL: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`,
        showModal: true,
      });
    }
    catch (error) {
      this.setState({
        errorResponse: error.response.status,
      });
    }
  }

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  }

  render() {
    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`;
    return (
      <>
        <UserForm handleCity={this.handleCity} getCityData={this.getCityData} />

        {this.state.errorResponse ?
          <ErrorAlert errorResponse={this.state.errorResponse} /> :
          <GeoModal
            showModal={this.state.showModal}
            handleClose={this.handleClose}
            cityData={this.state.cityData}
            mapURL={mapURL}
            weatherData={this.state.weatherData}
          />
        }
      </>
    );
  }
}

export default App;
