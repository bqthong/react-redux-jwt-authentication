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
    this.username = React.createRef();
    this.password = React.createRef();
  }

  performLoginForm = () => {
    const requestBody = {
      username: this.username.current.value,
      password: this.password.current.value
    }
    this.props.login(requestBody);
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
      <div className="login-container">
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Login page" />
        </Helmet>
        <div className="login-wrapper">
          <Form className="login-form">
            <div className="login-logo"><h2>LOGO</h2></div>
            <div className="login-alert">{isLoading ? showLoading : alert}</div>
              <Form.Group controlId="formEmail">
                <Form.Control className="input" type="text" ref={this.username} placeholder="Username" />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Control className="input" type="password" ref={this.password} placeholder="Password" />
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
                <Button variant="primary" onClick={this.performLoginForm} size="lg" block>Log In</Button>
              </Form.Group>
              <Form.Group controlId="formFogotPassword">
                <a href="/">Forgot your password ?</a>
              </Form.Group>
              <div className="login-divider"><span className="login-divider-text">OR</span></div>
              <Link to="/signup"><Button variant="secondary" type="submit" size="lg" block>Sign Up</Button></Link>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);