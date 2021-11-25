import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ReactCardFlip from 'react-card-flip';
import { SocialIcon } from 'react-social-icons';
import Typewriter from 'typewriter-effect';
import Card from './Card';
export default function Projects(props) {

   const { isDark } = props;
   const data = [
      { type: 'Website', name: "ShoppingAdda", desc: "This is a Ecommmerce website build with react,firebase,ExpressJs,Stripe", gitLink: '', appLink: '' },
      { type: 'Mobile App', name: "ShoppingAdda-Mobile", desc: "This is a Ecommmerce Mobile Application  build with React-Native,Firebase,ExpressJs,Stripe", gitLink: '', appLink: '' },
      { type: 'Website', name: "BasicBankingWebsite", desc: "This is a Ecommmerce website build with react,firebase,ExpressJs,Stripe", gitLink: '', appLink: '' }
   ]
   return (
      <div >
         <Container style={{ fontFamily: 'Ubuntu', marginTop: '8em', color: isDark ? "white" : "black", }} >
            <Row >
               {
                  data.map((item) => (

                     <Col xs={20} md={4}>
                        <Card type={item.type} name={item.name} desc={item.desc} gitLink={item.gitLink} />
                     </Col>

                  )
                  )
               }
            </Row>
         </Container >
      </div >

   )
}
