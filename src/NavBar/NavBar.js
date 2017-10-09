import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

  render() {
    return (
      <div className="NavBar">
        <div className="link-container">
          <a href="/page1" className="link">Página 1</a>
        </div>
        <div className="link-container">
          <a href="/page2" className="link">Página 2</a>
        </div>
      </div>
    );
  }

}

export default NavBar;
