import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import HomeSection from './Components/App/BodyComponent/HomeSection'
import Blog from './Components/App/BodyComponent/Blog'

import ContactSection from './Components/App/BodyComponent/ContactSection'
import ContactThanks from './Components/App/BodyComponent/ContactComponent/ContactThanks'

import TeamSection from './Components/App/BodyComponent/TeamSection'

import EBooksSection from './Components/App/BodyComponent/EBooksSection'
import EBookSignup from './Components/App/BodyComponent/EBookComponent/EBookSignup'
import EBookThanks from './Components/App/BodyComponent/EBookComponent/EBookThanks'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeSection} />
        <Route path="/blog" component={Blog} />
        <Route exact path="/contact" component={ContactSection} />
        <Route path="/contact/thanks" component={ContactThanks} />
        <Route path="/team" component={TeamSection} />
        <Route exact path="/ebooks" component={EBooksSection} />
        <Route path="/ebooks/ebooksignup" component={EBookSignup} />
        <Route path="/ebooks/thanks" component={EBookThanks} />

        {/*Default Page*/}
        <Route component={HomeSection} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
