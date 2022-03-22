import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './UserForm.css';

class UserForm extends React.Component {

  render() {
    return(
      <Form onSubmit={this.props.getCityData}>
      <Form.Group controlId="city">
        <Form.Label>City Name</Form.Label>
        <Form.Control onInput={this.props.handleCity} type="text"/>
      </Form.Group>
        <Button 
          variant="primary" 
          type="submit">
          Explore!
        </Button>
    </Form>
    );
  }
}

export default UserForm;