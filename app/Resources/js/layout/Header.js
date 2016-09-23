import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Site de tutoriel</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem href="home">Accueil</NavItem>
                    <NavItem href="page1">Menu 1</NavItem>
                    <NavItem href="page2">Menu 2</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
