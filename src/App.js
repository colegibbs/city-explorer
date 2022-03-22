import React from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import GeoModal from './GeoModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      mapURL: '',
      city: '',
      showModal: false,
      error: false,
      errorMessage: '',
    }
  }
  handleCity = (event) => {
    this.setState({
      city: event.target.value,
    })
  }

  getCityData = async (event) => {
    event.preventDefault();
    let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city}&format=json`);
    this.setState({
      cityData: cityData.data[0],
      mapURL: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`,
      showModal: true,
    });
  } 

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  }

  render() {
    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`;
    return(
      <>
      <UserForm handleCity={this.handleCity} getCityData={this.getCityData}/>

      <GeoModal showModal={this.state.showModal} handleClose={this.handleClose} cityData={this.state.cityData} mapURL={mapURL}/>
      </>
    );
  }
}

export default App;
