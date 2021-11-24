import React, { useState } from 'react'
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import DarkModeToggle from "react-dark-mode-toggle";
import Skills from '../skills/Skills';
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
               <Nav >
                  <NavLink style={{ color: isDark ? "white" : "black", fontWeight: 'bold' }}><ScrollLink to={Skills}>Skills</ScrollLink></NavLink>
                  <NavLink style={{ color: isDark ? "white" : "black", fontWeight: 'bold' }}>Experience</NavLink>
                  <NavLink style={{ color: isDark ? "white" : "black", fontWeight: 'bold' }}>Contact Me</NavLink>
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
