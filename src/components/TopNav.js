import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import Sunflower from '../img/sunflower.png';

const TopNav = () => (
  <Navbar inverse collapseOnSelect fluid>
  <Navbar.Header>
    <Navbar.Brand>
      <img src={Sunflower} alt="sunflower"/>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav className="logo-title">
      <NavItem className="logo-title short-fadein">AMECO</NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem className="nav-item-button " eventKey={1} href="#">
          <span className="long-fadein">Home</span>
      </NavItem>
      <NavItem className="nav-item-button" eventKey={2} href="#">
          <span className="long-fadein">About</span>
      </NavItem>
      <NavItem className="nav-item-button" eventKey={3} href="#">
          <span className="long-fadein">Products</span>
      </NavItem>
      <NavItem className="nav-item-button" eventKey={4} href="#">
          <span className="long-fadein">Services</span>
      </NavItem>
      <NavItem className="nav-item-button" eventKey={5} href="#">
          <span className="long-fadein">Contact</span>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

export default TopNav;
