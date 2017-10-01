import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { firebaseAuth } from '../config/constants';

import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import Contact from './Contact';
import Login from './Login';
import NotFound from './NotFound';

import Home from '../scenes/Home';
import Profile from '../scenes/Profile';

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  );
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/profile' />}
    />
  );
}

class App extends Component {
    state = {
        authed: false
    }

    componentDidMount () {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
        if (user) {
            this.setState({
            authed: true
            });
        } else {
            this.setState({
            authed: false
            });
        }
        });
    }

    componentWillUnmount () {
        this.removeListener();
    }

    render() {
        return (
            <Router>
                <div id="wrapper">
                    <Header />
                    <Menu />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                        <PublicRoute authed={false} path='/contact' component={Contact} />
                        <PrivateRoute authed={this.state.authed} path='/profile' component={Profile} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
