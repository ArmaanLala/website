import React, { useState, useEffect } from 'react';
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileNav,
  NavMenu,
  NavItem,
  NavLink,
} from './NavElements';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

function Navbar(props: { toggle: () => void }) {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <NavLogo onClick={toggleHome}>Armaan Lala</NavLogo>
        <MobileNav onClick={props.toggle}>
          <FaBars />
        </MobileNav>
        <NavMenu>
          <NavItem>
            <NavLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-75}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-75}
            >
              Projects
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              to="resume"
              smooth={true}
              duration={500}
              spy={true}
              offset={-75}
            >
              Resume
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              offset={-75}
            >
              Skills
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
