import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import PageError from './PageError/PageError';
import './App.css';

class App extends Component {
  render() {
    return (
      <NavBar />
    );
  }
}

export default App;
