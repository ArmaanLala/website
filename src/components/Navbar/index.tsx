import React from 'react'
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileNav,
  NavMenu,
  NavItem,
  NavLink,
} from './NavElements'
import { FaBars } from 'react-icons/fa'

function Navbar() {
  return (
    <div>
      <Nav>
        <NavContainer>
          <NavLogo>Armaan Lala</NavLogo>
          <MobileNav>
            <FaBars />
          </MobileNav>
          <NavMenu>
            <NavItem>
              <NavLink to="about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="classes">Classes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="resume">Resume</NavLink>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </div>
  )
}

export default Navbar
