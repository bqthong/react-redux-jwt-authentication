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
import  FormControlValidator  from '../../components/FormControlValidator';

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
    this.state = {
      name: null,
      username: null,
      email: null,
      password: null,
      validator: {
        name: null,
        username: null,
        email: null,
        password: null,
      },
      formValid: false
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let validator = this.state.validator;
    switch (name) {
      case 'name': 
        if (value.length === 0) {
          validator.name = 'Please input name !';
        } else if (value.length < 1 || value.length > 32) {
          validator.name =  'Name must be 1-32 characters long !';
        } else {
          validator.name = '';
        }
        break;
      case 'username': 
      let usernameRegex = /^[a-zA-Z0-9]{4,}\d*$/;
      if (value.length === 0) {
        validator.username = 'Please input username !';
      } else if (!usernameRegex.test(value)) {
        validator.username =  'Username must be at least 4 characters and must contain only lowercase letters, numbers';
      } else {
        validator.username = '';
      }
        break;
      case 'email': 
      let emailRegex = /^[a-z][a-z0-9_]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
      if (value.length === 0) {
        validator.email = 'Please input email !';
      } else if (!emailRegex.test(value)) {
        validator.email =  'Invalid email address !';
      } else {
        validator.email = '';
      }
        break;
      case 'password': 
      let passwordRegex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
      if (value.length === 0) {
        validator.password = 'Please input password !';
      } else if (!passwordRegex.test(value)) {
        validator.password =  'Password must be at least 8 characters and must contain at least: one letter (a-z), one capitalized letter(A-Z), one special character, one digit (0-9)';
      } else {
        validator.password = '';
      }
        break;          
      default:
        break;
    }
    this.setState({
      validator,
      [name]: value,
      formValid: validator.name === '' 
        && validator.username === '' 
        && validator.email === '' 
        && validator.password === ''
    });
  }
  
  performSignUpForm = (event) => {
    event.preventDefault();
    const requestBody = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }
    this.props.signUp(requestBody);
  }

  render() {
    const { isLoading, message, hasError, isSuccess } = this.props;
    const { validator } = this.state;
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
              <FormControlValidator className="input" type="text" name="name" onChange={this.handleChange} placeholder="Name" validator={validator}/>
            </Form.Group>
            <Form.Group controlId="formUsername">
              <FormControlValidator className="input" type="username" name="username" onChange={this.handleChange} placeholder="Username" validator={validator}/>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <FormControlValidator className="input" type="password" name="password" onChange={this.handleChange} placeholder="Password" validator={validator}/>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <FormControlValidator className="input" type="email" name="email" onChange={this.handleChange} placeholder="Email" validator={validator}/>
            </Form.Group>
            <Button type="submit" className="signup-button" variant="primary" size="lg" disabled={!this.state.formValid} block>Sign Up</Button>
            <div>By clicking "Sign Up", you agree to our <a href="/">Terms of Service</a> and <a href="/">Privacy Statement</a>.</div>
          </Form>
          <div className="credit">Made with <span role="img" aria-label="heart-emoji">❤️</span> by <a href="https://github.com/bqthong">Thong</a></div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);