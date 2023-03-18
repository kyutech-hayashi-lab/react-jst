import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar className="sticky-top" bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="/">ビーチクリーンクラウドサービス</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link className="text-black me-4" href="https://devel.d259mard8ld388.amplifyapp.com">
            ゴミ検出アプリ
          </Nav.Link>
          <Nav.Link className="text-black" href="/form">
            イベント投稿はこちら
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
