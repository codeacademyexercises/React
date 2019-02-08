import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Button extends Component {
  render() {
    return (
      <div>
          <button type="button" onClick={this.props.onClick}>{this.props.name}</button>
      </div>
    );
  }
}

export default Button;
