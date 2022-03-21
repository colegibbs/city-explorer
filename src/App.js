import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      mapURL: '',
      city: '',
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
      mapURL: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`
    });
  } 

  render() {
    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`;
    return(
      <>
      <Form onSubmit={this.getCityData}>
        <Form.Group controlId="city">
          <Form.Label>City Name</Form.Label>
          <Form.Control onInput={this.handleCity} type="text"/>
        </Form.Group>
          <Button 
            variant="primary" 
            type="submit">
            Explore!
          </Button>
      </Form>

      <Image src={mapURL}/>

      <ListGroup>
        <ListGroup.Item>Name: {this.state.cityData.display_name}</ListGroup.Item>
        <ListGroup.Item>Latitude: {this.state.cityData.lat}</ListGroup.Item>
        <ListGroup.Item>Longitude: {this.state.cityData.lon}</ListGroup.Item>
      </ListGroup>
      </>
    );
  }
}

export default App;
