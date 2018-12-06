import React, { Component } from 'react';
import ApiCaller from './apiCaller'

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <ApiCaller />
        <p>These are the emails</p>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
      </div>
    );
  }
}
