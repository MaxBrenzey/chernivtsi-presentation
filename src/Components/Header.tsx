import React from 'react'
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons'
import './Shablon-style.css';

const Header = () => {
  return (
    <header className='main-header-container' >
      <Navbar 
        collapseOnSelect 
        expand="md"
        // bg="dark" 
        variant="dark"
      >
        <Container fluid="md">
          <Navbar.Brand href="#home">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form >
            <SocialIcon 
              url="https://www.linkedin.com/in/maxim-brenzey-639005190/" 
              className="icon-linkedin"
              target="_blank"
              style={{ height: 45, width: 45 }}
              bgColor="transparent"
            />
                
            <SocialIcon 
              url="https://github.com/MaxBrenzey" 
              className="icon-linkedin"
              target="_blank"
              style={{ height: 45, width: 45}}
              bgColor="transparent"
            />
          </Form>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
