import React from 'react';
import Weather from './Weather';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import './GeoModal.css';

class GeoModal extends React.Component {
  render() {

    let weathers = this.props.weatherData.map((day, idx) => {
      return(
        <Weather
          date={day.date}
          weather={day.description}
          key={idx}
        />
      );
    })

    return(
      <Modal show={this.props.showModal} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.cityData.display_name}</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <ListGroup>
              <ListGroup.Item>Latitude: {this.props.cityData.lat}</ListGroup.Item>
              <ListGroup.Item>Longitude: {this.props.cityData.lon}</ListGroup.Item>
            </ListGroup>
            <Image src={this.props.mapURL}/>
            {weathers}
          </Modal.Body>
      </Modal>
    );
  }
}

export default GeoModal;
