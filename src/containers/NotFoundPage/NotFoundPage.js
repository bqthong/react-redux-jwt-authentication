import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

class NotFoundPage extends Component {
  render() {
    return (
      <Container className="notfound-container">
        <Helmet>
          <title>404 Notfound</title>
          <meta name="description" content="React app notfound page" />
        </Helmet>
        <div className="notfound-page">
          404 Notfound !
        </div>
      </Container>

    );
  }
}

export default NotFoundPage;