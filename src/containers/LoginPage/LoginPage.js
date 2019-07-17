import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Form, Button, Alert } from 'react-bootstrap';

/**
 * Modules
 */
import './login.scss';
import { performLogin } from './LoginActions';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import  FormControlValidator  from '../../components/FormControlValidator';

/**
 * This is to map data from the store to the component
 */
const mapStateToProps = state => ({
  message: state.login.message,
  hasError: state.login.hasError,
  isLoading: state.login.isLoading
})
const mapDispatchToProps = dispatch => ({
  login: requestBody => dispatch(performLogin(requestBody)),
})

/**
 * Login container
 */
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      username: null,
      password: null,
      validator: {
        username: null,
        password: null
      },
      formValid: false
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let validator = this.state.validator;
    switch (name) {
      case 'username': 
      validator.username = value.length === 0 ? 'Please input username !' : '';
        break;
      case 'password': 
      validator.password = value.length === 0 ? 'Please input password !' : '';
        break;          
      default:
        break;
    }
    this.setState({
      validator,
      [name]: value,
      formValid: validator.username === '' && validator.password === ''
    });
  }

  performLoginForm = (event) => {
    event.preventDefault();
    const requestBody = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.login(requestBody);
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
      <div className="login-container">
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Login page" />
        </Helmet>
        <div className="login-wrapper">
          <Form className="login-form" onSubmit={this.performLoginForm}>
            <div className="login-logo"><h2>LOGO</h2></div>
            <div className="login-alert">{isLoading ? showLoading : alert}</div>
              <Form.Group controlId="formEmail">
                <FormControlValidator className="input" type="text" name="username" onChange={this.handleChange} placeholder="Username" validator={validator}/>
              </Form.Group>

              <Form.Group controlId="formPassword">
                <FormControlValidator className="input" type="password" name="password" onChange={this.handleChange} placeholder="Password" validator={validator}/>
              </Form.Group>
              <Form.Group controlId="formChecbox">
                <Form.Check 
                  custom
                  type={"checkbox"}
                  id="remember-me"
                  label="Remember me"
                />
              </Form.Group>
              <Form.Group controlId="formBtnLogin">
                <Button type="submit" variant="primary" size="lg" disabled={!this.state.formValid} block>Log In</Button>
              </Form.Group>
              <Form.Group controlId="formFogotPassword">
                <a href="/">Forgot your password ?</a>
              </Form.Group>
              <div className="login-divider"><span className="login-divider-text">OR</span></div>
              <Link to="/signup"><Button variant="secondary" type="submit" size="lg" block>Sign Up</Button></Link>
          </Form>
          <div className="credit">Made with <span role="img" aria-label="heart-emoji">❤️</span> by <a href="https://github.com/bqthong">Thong</a></div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);