import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar className="sticky-top" bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="/">Beach Clean Cloud Service</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link className="text-black" href="/form">
            主催者の方はこちら
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
