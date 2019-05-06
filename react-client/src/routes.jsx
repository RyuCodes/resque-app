import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import HomeSection from './Components/App/BodyComponent/HomeSection'
import Blog from './Components/App/BodyComponent/Blog'

import testMessage from './TestSection'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeSection} />
        <Route path="/blog" component={Blog} />


        {/*404 Page*/}
        <Route component={HomeSection} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
