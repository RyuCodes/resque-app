import React, { Component } from 'react';

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
