import React, { Component } from 'react';

import PhiloSection from './TeamComponent/PhiloSection'
import TeamPhotos from './TeamComponent/TeamPhotos'


class TeamSection extends Component{

  render(){
    return(
      <div className="navbarPadding">
        <h1 className="text-center">Meet Our Team</h1>
        <React.Fragment>
          <TeamPhotos />
          <PhiloSection />
        </React.Fragment>
      </div>
    )
  }

}

export default TeamSection;
