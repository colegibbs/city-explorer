import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Movies extends React.Component {
  render() {
    return(
      <ListGroup.Item as="li">{this.props.movie}</ListGroup.Item>
    );
  }
}

export default Movies;