import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BlogBody from './BlogComponent/BlogBody'

class Blog extends Component{
  render(){
    return(
      <React.Fragment>
        <div id="blogHero">
            <Row>
              <Col className="align-self-center text-center" lg={12}>
              <h1 className="text-light">Boost Your Social IQ</h1>
              </Col>
            </Row>
        </div>
          <BlogBody />
      </React.Fragment>
    )
  }
}

export default Blog
