import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Form, Button, Alert } from 'react-bootstrap';

/**
 * Modules
 */
import './signup.scss';
import { performSignUp } from './SignUpActions';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

/**
 * This is to map data from the store to the component
 */
const mapStateToProps = state => ({
  message: state.signup.message,
  hasError: state.signup.hasError,
  isSuccess: state.signup.isSuccess,
  isLoading: state.signup.isLoading,
})
const mapDispatchToProps = dispatch => ({
  signUp: requestBody => dispatch(performSignUp(requestBody)),
})

/**
 * SignUp Container
 */
class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.username = React.createRef();
    this.password = React.createRef();
    this.email = React.createRef();
  }
  
  performSignUpForm = (event) => {
    event.preventDefault();
    const requestBody = {
      name: this.name.current.value,
      username: this.username.current.value,
      password: this.password.current.value,
      email: this.email.current.value
    }
    this.props.signUp(requestBody);
  }

  render() {
    const { isLoading, message, hasError, isSuccess } = this.props;
    let showLoading = <LoadingSpinner />;
    let alert = null;
    if (hasError) {
      alert = <Alert variant="danger">{message}</Alert>;
    } else if (isSuccess) {
      alert = <Alert variant="success">{message}</Alert>;
    }
    return (
      <div className="signup-container">
        <Helmet>
          <title>SignUp</title>
          <meta name="description" content="Signup page" />
        </Helmet>
        <div className="signup-wrapper">
          <Form className="signup-form" onSubmit={this.performSignUpForm}>
            <div className="signup-logo"><h2>LOGO</h2></div>
            <div className="signup-alert">{isLoading ? showLoading : alert}</div>
            <Form.Group controlId="formName">
              <Form.Control className="input" type="text" ref={this.name} placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Control className="input" type="username" ref={this.username} placeholder="Username" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control className="input" type="password" ref={this.password} placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Control className="input" type="email" ref={this.email} placeholder="Email" />
            </Form.Group>
            <Button type="submit" className="signup-button" variant="primary" size="lg" block>Sign Up</Button>
            <div>By clicking "Sign Up", you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Statement</a>.</div>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);