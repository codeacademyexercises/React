import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Button extends Component {
  render() {
      console.log(this.props);
    return (
      <button onClick={this.props.on}/>
    );
  }
}

export default Button;
