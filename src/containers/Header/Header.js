import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

/**
 * Modules
 */
import { performLogout } from '../LoginPage/LoginActions';

/**
 * This is to map data from the store to the component
 */
const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated
})
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(performLogout()),
})

/**
 * Header container
 */
class Header extends Component {
  render() {
    const { logout, isAuthenticated } = this.props;
    let navbar = (
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
        </Nav>
        <Form inline>
          <Link to="/login"><Button className="btn-login mr-sm-2" variant="primary">Login</Button></Link>
          <Link to="/signup"><Button className="btn-signup mr-sm-2" variant="secondary">Signup</Button></Link>
        </Form>
      </Navbar.Collapse>
    );
    if (isAuthenticated) {
      navbar = (
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/admin"><Nav.Link>Admin</Nav.Link></LinkContainer>
            <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
          </Nav>
          <Form inline>
            <Button onClick={logout} className="btn-signup" variant="danger">Logout</Button>
          </Form>
        </Navbar.Collapse>
      );
    }
    return (
      <header id="app-header">
        <Navbar className="app-navbar" bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {navbar}
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);