import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const populateSections = [{
      h1: "Connect",
      p: "With every popular social network through your Buffer account",
    },
    {
      h1: "Optimize",
      p: "Your schedule and never worry about posting again",
    },
    {
      h1: "Preview",
      p: "How your posts will look in the Social Feed",
    },
    {
      h1: "Upload",
      p: "Posts in bulk format",
    },
    {
      h1: "Share",
      p: "Your draft posts with your team or clients",
    },
    {
      h1: "Re-Queue",
      p: "Top performing posts with one click",
    }]

class FeatureSection extends Component {

  render(){
      return(
        <Container>
        <Row className="text-justify text-uppercase text-center">
            {populateSections.map((post, postIndex) => {
              return(
                  <Col className="featureCard" key={postIndex.toString()} sm={12} lg={4}>
                    <React.Fragment>
                      <h4>{post.h1}</h4>
                      <p>{post.p}</p>
                    </React.Fragment>
                  </Col>
              )
            })}
          </Row>
        </Container>
      )
  }
}

export default FeatureSection;
