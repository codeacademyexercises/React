import React, { Component } from 'react';
import Button from '../Button';
// import logo from './logo.svg';
// import './App.css';

class Counter extends Component {
    state = {
        count: this.props.initialValue,
    };
    increment = ()=> this.setState({count: this.state.count+1});
    decrement = ()=> this.setState({count: this.state.count-1});    
  render() {
      console.log(this.state.count);
    return (
      <div>
          <div>Counter :{this.state.count}</div>
          <Button name="Add" onClick={this.increment}></Button>
          <Button name="Minus" onClick={this.decrement}></Button>
      </div>
    );
  }
}

export default Counter;
