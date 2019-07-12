import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container, Jumbotron, Button } from 'react-bootstrap';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

class HomePage extends Component {
  render() {
    return (
      <Container className="home-container">
        <Helmet>
          <title>Home</title>
          <meta name="description" content="React app homepage" />
        </Helmet>
        <Jumbotron>
          <h1>Hello guys!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </Container>
      
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);