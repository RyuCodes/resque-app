import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';


import App from './Components/App/App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
