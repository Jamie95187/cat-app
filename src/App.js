import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Image from './components/Image';
import Header from './components/layout/Header'

export default class App extends Component {
  render(){
    return(
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Image />
          </div>
        </div>
      </Router>
    );
  }
}
