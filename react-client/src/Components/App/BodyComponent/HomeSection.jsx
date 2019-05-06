import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';


import HeroSection from './HomeComponent/HeroSection';
import AboutSection from './HomeComponent/AboutSection';
import FeatureSection from './HomeComponent/FeatureSection';
import PricingSection from './HomeComponent/PricingSection';

class HomeSection extends Component {



  render(){
      return(
        <React.Fragment>
          <HeroSection />
          <AboutSection />
          <FeatureSection />
          <PricingSection />
        </React.Fragment>
      )
  }
}

export default HomeSection;
