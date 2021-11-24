import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
export default function Header(props) {
   const { isDark } = props;
   const [isDarkMode, setIsDarkMode] = useState(isDark);
   return (

      <Navbar collapseOnSelect expand="lg" bg={isDark ? "#171C28" : "light"} >
         <Container>
            <Link to="main"></Link>
            <Navbar.Brand  > <h3 style={{ fontStyle: 'Praise', color: isDark ? 'white' : 'black' }}>Piyush Paradkar</h3> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" activeKey="/home">
               <Nav>
                  <li>
                     <ScrollLink to="skills" smooth={true} className="logo">
                        Skills
                     </ScrollLink>
                  </li>
                  <li>
                     <ScrollLink to="services" smooth={true} className="logo">
                        Projects
                     </ScrollLink>
                  </li>
                  <li>
                     <ScrollLink to="features" smooth={true} className="logo">
                        About
                     </ScrollLink>
                  </li>
               </Nav>
            </Navbar.Collapse>
         </Container >
         <DarkModeToggle
            checked={isDarkMode}
            size={80}
            onChange={() => { setIsDarkMode(isDark ? false : true); props.parentCallback(isDark ? false : true) }}
         />
      </Navbar >

   )
}
