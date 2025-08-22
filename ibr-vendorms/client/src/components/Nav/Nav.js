import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.svg';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Nav = () => {

  return (
    <Navbar className="bg-body-tertiary">
    <Container fluid className="d-flex justify-content-between align-items-center">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          height="80"
          className="d-inline-block align-top"
          alt="IBR Logo"
        />
      </Navbar.Brand>
    </Container>
  </Navbar>
  );
}

export default Nav;
