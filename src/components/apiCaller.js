import React, { Component } from 'react';

export default class ApiCaller extends Component {
  constructor(props) {
    super(props)

    this.state = {
      emails: []
    }
  }

  componentWillMount() {
    fetch('https://ads-python-flask-app.herokuapp.com/return_emails',{
      method: 'GET',
      headers: {
        "accept": "application/json",
        'Content-Type': 'application/json'
      }
    })
    .then(response => { return response.json();})
    .then(responseData => {console.log(responseData); return responseData;})
    .then(data => {this.setState({emails: data});})

    .catch(err => {
      console.log("fetch error" + err)
    });
  }
  render() {
    return (
      <div className='apiCaller'>
        <h1>This is My awesome Api ApiCaller</h1>
        <h2>React Redux Router</h2>
        <div>{this.state.emails}</div>
      </div>
    );
  }
}
