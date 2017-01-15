console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,  hashHistory } from 'react-router'
import Layout from './Layout.js'

var About = React.createClass({
  render: function(){
    return (
      <div><h1>About</h1></div>
    )
  }
})


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render((

    <Router history={hashHistory}>
      <Route path="/" component = {Layout} />
      <Route path="/about" component = {About} />
    </Router>

      ),  document.getElementById('mount')
  );
});








