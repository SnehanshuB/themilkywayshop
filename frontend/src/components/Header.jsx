import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand>
                    <img 
                        src={logo} 
                        alt="TheMilkyWayShop" 
                        style={{ width: '100px', height: '100px' }} // Inline styles for width and height
                    />
                    <span style={{ fontSize: '24px', fontWeight: 'bold', fontStyle: 'italic', color: '#fff' }}>TheMilkyWayShop</span>
                </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <LinkContainer to='/cart'>
                        <Nav.Link>
                            <FaShoppingCart /> Cart
                        </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                        <Nav.Link href="/login"><FaUser /> Sign In</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header