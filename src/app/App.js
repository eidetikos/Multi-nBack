import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import Auth from '../auth/Auth';
import Nav from '../nav/Nav';
import About from '../about/About';
import Game from '../game/Game';

import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>Memory App</h1>
            <Auth/>
            <Nav/>
          </header>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/Game" component={Game}/>
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
  state => ({}),
  null
)(App);
