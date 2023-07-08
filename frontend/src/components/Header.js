import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="sm" className="navbar">
        <Container fluid="lg">
          <LinkContainer to="/">
            <Navbar.Brand className="navbar__brand">
              <h3>SportNFT</h3>
              {/* <img
                  src={logoMSR}
                  className="logo"
                  alt="logo de Mujer Sin Reglas"
                ></img> */}
            </Navbar.Brand>
          </LinkContainer>

          <Nav.Link href="/education" className="action-button">
            Connect Wallet
          </Nav.Link>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
