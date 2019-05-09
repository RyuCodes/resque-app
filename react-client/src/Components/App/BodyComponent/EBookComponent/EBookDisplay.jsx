import React, { Component } from 'react';

import { LinkContainer } from 'react-router-bootstrap';

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const photoCol = (imgUrl, imgAlt) => {
  return (
    <Col sm={12} lg={6}>
      <img src={imgUrl} className="eBookPicture" alt={imgAlt} />
    </Col>
  )
}

const descCol = (title, content, link) => {
  return(
    <Col sm={12} lg={6} className="align-self-center">
      <h2 className="text-center">{title}</h2>
      <br />
      {content.map((item) =>{
        return(
          <div key={item.header}>
            <React.Fragment>
              <h4><b>{item.header}</b></h4>
              <p className="text-muted">{item.p}</p>
            </React.Fragment>
          </div>
      )})}

       <br />
       <div className="text-center">
        <LinkContainer to={link}>
          <Button variant="success">
             Get the E-Book
          </Button>
        </LinkContainer>
       </div>
    </Col>
)}

class EBookDisplay extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let firstDisplay;
    let secondDisplay;

    if (this.props.photoAlign === 'right'){
      firstDisplay = descCol(
          this.props.title,
          this.props.content,
          this.props.ebooklink
      );
      secondDisplay = photoCol(this.props.imgUrl, this.props.imgAlt);
    }
    else {
      firstDisplay = photoCol(this.props.imgUrl, this.props.imgAlt);
      secondDisplay = descCol(
          this.props.title,
          this.props.content,
          this.props.ebooklink
      );
    }

    return (
        <Container className="h-100 eBooksDisplay">
            <Row className="h-100">
              <React.Fragment>
                {firstDisplay}
                {secondDisplay}
              </React.Fragment>
            </Row>
        </Container>
    )
  }
}
export default EBookDisplay;
