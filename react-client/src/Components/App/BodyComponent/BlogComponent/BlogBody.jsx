import React, { Component } from 'react';
import axios from 'axios';

import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import decodeWPUnicode from './decoder'

class BlogBody extends Component {

  constructor(props){
    super(props);
    this.cancelSignal = axios.CancelToken.source();
    this.fetchPosts = this.fetchPosts.bind(this);
    this.state = {
      posts:[],
    }
  }

  fetchPosts(){
    return axios.get(
        'http://www.resqueapp.com/wp-json/wp/v2/posts',
        {cancelToken: this.cancelSignal.token}
      );
  }

  componentDidMount(){
    this.fetchPosts()
      .then(json => json.data.map(result => ({
        id: result.id.toString(),
        title: result.title.rendered,
        excerpt: result.excerpt.rendered,
        publishDate: result.date,
        link: result.link,
      })))
      .then(newData => this.setState({posts: newData}))
      .catch(error => console.log(error))
  }

  componentWillUnmount(){
    this.cancelSignal.cancel('WP API Call Cancelled');
  }

  render(){
    let posts = this.state.posts
    return (
      <Container>
        <Row className="align-items-center blogCard">
        {posts.map(post => {
          /* Convert ISO to regular date string */
          let publishDate = post.publishDate.toString().split("T")[0]

          return (
            <Col lg={4} sm={12} className="align-self-center" key={post.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{decodeWPUnicode(post.title)}</Card.Title>
                    <Card.Text>
                      {decodeWPUnicode(post.excerpt, 'excerpt')}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href={post.link}>Read More</Card.Link>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Date Published: {publishDate}</small>
                </Card.Footer>
              </Card>
            </Col>
          )})}
        </Row>
      </Container>
    )
  }

}

export default BlogBody;
