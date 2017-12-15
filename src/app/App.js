import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkForToken } from '../auth/actions';

import Dashboard from '../dashboard/Dashboard';
import Header from './Header';
import About from '../about/About';
import Game from '../game/Game';
import PrivateRoute from '../auth/PrivateRoute';

import './App.css';


class App extends Component {

  componentDidMount() {
    this.props.checkForToken();
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/about" component={About}/>
            <PrivateRoute path="/game" component={Game}/>
          </Switch>
          <footer>
            <h1>FOOOOOOOOOOOOOT</h1>
          </footer>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  { checkForToken }
)(App);
