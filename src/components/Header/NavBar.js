import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './header.scss'
import { Button } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
        <Navbar id='menus' collapseOnSelect expand="lg" variant="light" >
          <Container>
            <Navbar.Brand  target="_blank" href="/">Shortly</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav >
                <Nav.Link  href="/">Features</Nav.Link>
                <Nav.Link  href="/">Pricing</Nav.Link>
                <Nav.Link  href="/">Resources</Nav.Link>
              </Nav>
              <Nav className="right-nav">
                <Nav.Link href="/"  target="_blank" className='icon'>Login</Nav.Link>
                <Button className='sign-up-button'>Sign Up</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>    )
  }
}
