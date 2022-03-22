import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import './GeoModal.css';

class GeoModal extends React.Component {
  render() {
    return(
      <Modal show={this.props.showModal} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.cityData.display_name}</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <ListGroup>
              <ListGroup>Latitude: {this.props.cityData.lat}</ListGroup>
              <ListGroup>Longitude: {this.props.cityData.lon}</ListGroup>
            </ListGroup>
            <Image src={this.props.mapURL}/>
          </Modal.Body>
      </Modal>
    );
  }
}

export default GeoModal;
