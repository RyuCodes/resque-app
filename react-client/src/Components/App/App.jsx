import React, { Component } from 'react';

import HomeSection from './BodyComponent/HomeSection';

import Navigation from './HeaderComponent/Navigation';
import Routes from '../../routes'

class App extends Component {
  render() {
    return (
        <div>
          <Navigation />
          <Routes />
        </div>
    )
  }
}

export default App;
