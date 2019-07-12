import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Jumbotron, Button} from 'react-bootstrap';

class AdminPage extends Component {
  render() {
    return (
      <Container className="admin-container">
        <Helmet>
          <title>Admin</title>
          <meta name="description" content="Admin page" />
        </Helmet>
        <Jumbotron>
          <h1>Hello Admin!</h1>
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

export default AdminPage;