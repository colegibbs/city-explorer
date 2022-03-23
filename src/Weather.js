import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {
  render() {
    return(
      <ListGroup>
        <ListGroup.Item>Date: {this.props.date}</ListGroup.Item>
        <ListGroup.Item>Weather: {this.props.weather}</ListGroup.Item>
      </ListGroup>
    );
  }
}

export default Weather;