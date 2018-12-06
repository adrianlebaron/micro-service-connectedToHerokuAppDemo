import React, { Component } from 'react';
import ApiCaller from './apiCaller'

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <ApiCaller />
        <h1>These are the emails</h1>
        <h3>DevCamp React Starter</h3>
        <h2>React Redux Router</h2>
      </div>
    );
  }
}
