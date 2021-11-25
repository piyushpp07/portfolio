import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ReactCardFlip from 'react-card-flip';
import { SocialIcon } from 'react-social-icons';
import Typewriter from 'typewriter-effect';
import Card from './Card';
import date from '../../assets/Screenshot_2021-11-05-19-27-23-96.jpg'
export default function Projects(props) {

   const { isDark } = props;
   const data = [
      { type: 'Website', name: "ShoppingAdda", desc: "This is a Ecommmerce website build with react,firebase,ExpressJs,Stripe", gitLink: '', appLink: '', image: "https://ibb.co/KDMsFtq" },
      { type: 'Mobile App', name: "ShoppingAdda-Mobile", desc: "This is a Ecommmerce Mobile Application  build with React-Native,Firebase,ExpressJs,Stripe", gitLink: '', appLink: '', image: "" },
      { type: 'Website', name: "BasicBankingWebsite", desc: "This is a Basic Banking  website build with react,firebase", gitLink: '', appLink: '', image: "" }
   ]
   return (
      <div id="projects">
         <Container style={{ fontFamily: 'Ubuntu', marginTop: '8em', color: isDark ? "white" : "black", }} >
            <Row >
               {
                  data.map((item) => (
                     <Col sm={3} xs={18} md={4}>
                        <Card image={item.image} type={item.type} name={item.name} desc={item.desc} gitLink={item.gitLink} />
                     </Col>
                  )
                  )
               }
            </Row>
         </Container >
      </div >

   )
}
