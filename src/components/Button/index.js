import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

const Button = (props)=> {
  return (
      <div>
          <button type="button" onClick={props.onClick}>{props.name}</button>
      </div>
    );
}

export default Button;
