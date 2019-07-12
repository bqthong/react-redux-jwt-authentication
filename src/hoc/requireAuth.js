import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isAuthenticated : state.login.isAuthenticated
})

export default function(RequireAuthComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/login');
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.push('/login');
      }
    }
    render(){
      return <RequireAuthComponent {...this.props}/>
    }
  }
  return connect(mapStateToProps)(Authentication);
}