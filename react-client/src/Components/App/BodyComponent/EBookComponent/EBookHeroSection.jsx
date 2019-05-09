import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { LinkContainer } from 'react-router-bootstrap';

class EBookHeroSection extends Component {
  render() {
    return (
      <div id="eBooksHero">
        <Container className="h-100">
            <Row className="h-100">
              <Col className="align-self-center">
              <h1 className="text-light text-center">Get Your Marketing Strategy
               In Gear with Resque’s Guide to Social Media</h1>
               <br />
               <div className="text-center">
                <LinkContainer to={this.props.ebooklink}>
                 <Button variant="success">
                   Get Your Free E-Book
                 </Button>
                </LinkContainer>
               </div>
              </Col>
            </Row>
        </Container>
      </div>
    )
  }
}
export default EBookHeroSection;
