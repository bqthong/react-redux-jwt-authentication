import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isAuthenticated : state.login.isAuthenticated
})

export default function(NotRequireAuthComponent) {
  class NotAuthentication extends Component {
    componentWillMount() {
      if (this.props.isAuthenticated) {
        this.props.history.push('/');
      }
    }
    componentWillUpdate(nextProps) {
      if (nextProps.isAuthenticated) {
        this.props.history.push('/');
      }
    }
    render(){
      return <NotRequireAuthComponent {...this.props}/>
    }
  }
  return connect(mapStateToProps)(NotAuthentication);
}