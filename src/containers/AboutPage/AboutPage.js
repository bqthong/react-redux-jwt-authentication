import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row} from 'react-bootstrap';

class AboutPage extends Component {
  render() {
    return (
      <Container className="about-container">
        <Helmet>
          <title>About</title>
          <meta name="description" content="About page" />
        </Helmet>
        <Row className="about-page">
        <div>About page</div>
        </Row>
      </Container>

    );
  }
}

export default AboutPage;