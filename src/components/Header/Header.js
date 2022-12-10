import React, { Component } from 'react'
import NavBar from './NavBar';
import './header.scss'
import { Row, Col, Button } from 'react-bootstrap';



export default class Header extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Row id='cover'>
          <Col lg={6} md={6} sm={10} >
          <h2>More than just shorten links</h2>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <Button className='sign-up-button'>Get Started</Button>
          </Col>
          <Col lg={4} md={4} sm={10}>
          <img src='/images/illustration-working.svg' className='illustration'/>
          </Col>
        </Row>
      </>
    )
  }
}
