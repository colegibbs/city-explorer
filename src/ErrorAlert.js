import React from 'react';

class ErrorAlert extends React.Component {
  render() {
    return(
      alert(`There is an issue with the API call. Error Status Code: ${this.props.errorResponse}`)
    );
  }
}

export default ErrorAlert;