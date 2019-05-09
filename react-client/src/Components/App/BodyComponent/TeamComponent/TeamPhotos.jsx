import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

import teamArray from './teamstore.js'

class TeamPhotos extends Component {

  render(){
      return(
        <Container id="teamContainer">
        <CardGroup>
          {teamArray.map((item) =>{
            return(
              <Card className="text-center" key={item.name}>
                <Card.Img variant="top" className="teamPhotos mx-auto" src={item.photoUrl} />
                <Card.Body>
                  <Card.Title className="text-uppercase">{item.name}</Card.Title>
                  <Card.Text className="text-muted">
                    <small>{item.title}</small>
                    <br />
                    {item.about}
                  </Card.Text>
                </Card.Body>
              </Card>
            )
          })}
        </CardGroup>
        </Container>
      )
  }
}

export default TeamPhotos;
