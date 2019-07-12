import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

class LoadingSpinner extends Component {
  render() {
    const label = this.props.label || 'Loading...'
    return (
      <div className="loading-container">
        <div><FontAwesomeIcon icon={faSpinner} spin/> {label}</div>
      </div>
    );
  }
}

export default LoadingSpinner;