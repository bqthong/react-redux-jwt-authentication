import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

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
 * Containers
 */
const HomePage = loadable(() => import ('./containers/HomePage'));
const AdminPage = loadable(() => import ('./containers/AdminPage'));
const LoginPage = loadable(() => import ('./containers/LoginPage'));
const SignUpPage = loadable(() => import ('./containers/SignUpPage'));
const AboutPage = loadable(() => import ('./containers/AboutPage'));
const NotFoundPage = loadable(() => import ('./containers/NotFoundPage'));
const Header = loadable(() => import ('./containers/Header'));
const Footer = loadable(() => import ('./containers/Footer'));

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
      <AppRoute component={NotFoundPage} layout={MainLayout} />
    </Switch>
  </Router>
)

export default App;