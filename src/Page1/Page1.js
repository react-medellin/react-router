import React, { Component } from 'react';

class Page1 extends Component {
  render() {
    return (
      <div className="page">
        <p>Hola {this.props.name} desde página 1</p>
      </div>
    );
  }
}

export default Page1;
