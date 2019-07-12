import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/**
 * Containers
 */
import HomePage from './containers/HomePage';
import AdminPage from './containers/AdminPage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import AboutPage from './containers/AboutPage';
import NotFoundPage from './containers/NotFoundPage';
import Header from './containers/Header';
import Footer from './containers/Footer';

/**
 * CSS
 */
import './app.scss';

/**
 * HOC
 */
import requireAuth from './hoc/requireAuth';
import notRequireAuth from './hoc/notRequireAuth';

/**
 * Return component with custom layout 
 */
const AppRoute = ({ component: Component, layout: Layout, ...routeProps }) => (
  <Route {...routeProps} render={ componentProps => (
    <Layout>
      <Component {...componentProps} />
    </Layout>
  )} />
)

/**
 * Main layout include Header and Footer
 */
const MainLayout = props => (
  <div className="app-container">
    <div className="app-wraper">
      <Helmet
        titleTemplate="%s - React App"
        defaultTitle="React App"
      >
      <meta name="description" content="React app" />
      </Helmet>
        <Header />
          {props.children}
    </div>
    <Footer />
  </div>
  
)

/**
 * Empty layout not include Header and Footer
 */
const EmptyLayout = props => (
  <div className="app-container">
    <Helmet
        titleTemplate="%s - React App"
        defaultTitle="React App"
      >
      <meta name="description" content="React app" />
    </Helmet>
    {props.children}
  </div>
)

/**
 * Main App
 */
const App = () => (
  <Router>
    <Switch>
      <AppRoute exact path="/" component={requireAuth(HomePage)} layout={MainLayout} />
      <AppRoute exact path="/admin" component={requireAuth(AdminPage)} layout={MainLayout} />
      <AppRoute exact path="/login" component={notRequireAuth(LoginPage)} layout={EmptyLayout} />
      <AppRoute exact path="/signup" component={notRequireAuth(SignUpPage)} layout={EmptyLayout} />
      <AppRoute exact path="/about" component={AboutPage} layout={MainLayout} />
      <AppRoute exact path="/404" component={NotFoundPage} layout={MainLayout} />
    </Switch>
  </Router>
)

export default App;