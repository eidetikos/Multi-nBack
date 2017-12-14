import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import Header from './Header';
import About from '../about/About';
import Game from '../game/Game';
// import Error from './Error';
// import Loading from './Loading';
import PrivateRoute from '../auth/PrivateRoute';

import { connect } from 'react-redux';

import './App.css'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <PrivateRoute path="/about" component={About}/>
            {/* <Route path="/game" component={Game}/> */}
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
  state => ({ 
    loading: state.loading,
    error: state.error
  }),
  null
)(App);
