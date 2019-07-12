import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class NotFoundPage extends Component {
  render() {
    return (
      <div className="notfound-container">
        <Helmet>
          <title>404 Notfound</title>
          <meta name="description" content="React app notfound page" />
        </Helmet>
        <div className="notfound-page">
          404 Notfound !
        </div>
      </div>

    );
  }
}

export default NotFoundPage;