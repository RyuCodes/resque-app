import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import EBookHeroSection from './EBookComponent/EBookHeroSection';
import EBookDisplay from './EBookComponent/EBookDisplay';
import EBookSignup from './EBookComponent/EBookSignup';

/* Object Literal File */
import eBookArray from './EBookComponent/ebookstore.js';

class EBooksSection extends Component{

  render(){
    let socialMediaGuide = eBookArray.mediaGuide;
    //let facebookGuide = eBookArray.facebook;

    let ebookLink = `${this.props.match.url}/ebooksignup`;

    return(
      <div className="navbarPadding">
        <React.Fragment>
          <EBookHeroSection
            ebooklink = {ebookLink}
           />
          <EBookDisplay
            imgUrl={socialMediaGuide.imgUrl}
            imgAlt={socialMediaGuide.imgAlt}
            title={socialMediaGuide.title}
            content={socialMediaGuide.content}
            ebooklink = {ebookLink}
            photoAlign='left'
           />
        </React.Fragment>

      </div>
    )
  }

}

export default EBooksSection;
