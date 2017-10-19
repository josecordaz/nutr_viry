// import React from 'react';
// import { render } from 'react-dom';
// import message from './modules/message.js';

// let num = 5;

// class App extends React.Component {
//     render () {
//         return <p> Hello React! {message}</p>;
//     }
// }

// render(<App/>, document.getElementById('app'));

var React = require('react');
var ReactDOM = require('react-dom');
 
class MyComponent extends React.Component {
  render() {
  return (<div>Hello World</div>);
  }
}
 
ReactDOM.render(<MyComponent />, document.getElementById('app'));