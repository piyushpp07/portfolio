import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ReactCardFlip from 'react-card-flip';
import { SocialIcon } from 'react-social-icons';
import Typewriter from 'typewriter-effect';
export default function Card(props) {

   const { desc, name, gitLink, appLink, type } = props;
   const [isFlipped, setIsFlipped] = useState(false)
   const handleClick = () => {
      setIsFlipped(isFlipped ? false : true);
   }

   return (
      <div style={{ width: '100%' }}>
         <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div>
               <Col xs={20} md={12} style={{
                  boxShadow: `0 8px 32px 0 rgba( 31, 38, 135, 0.37 )`, backgroundColor: `rgba(255, 255, 255, 0.1)`
                  , borderRadius: '1em', padding: '2em', elevation: '10em',

               }}>
                  <h3 style={{ fontSize: '4em', fontFamily: 'Praise', }}>{type} <h1 style={{ color: '#00A19D' }}>{name}</h1></h3>
                  <br></br>
                  <h2 style={{ fontFamily: 'monospace', fontWeight: 'bold' }} >

                  </h2>
                  <div style={{ marginTop: '1.5em', display: 'flex', justifyContent: 'space-around' }}>


                  </div>
                  <br></br>
                  <div style={{ marginTop: '1.5em', display: 'flex', justifyContent: 'space-around' }}>

                     <Button onClick={handleClick} style={{ borderRadius: '3em', backgroundColor: '#FF87CA', padding: '0.4em' }}>More Details...</Button>
                  </div>
               </Col>
            </div>

            <div>
               <Col xs={20} md={12} style={{
                  boxShadow: `0 8px 32px 0 rgba( 31, 38, 135, 0.37 )`, backgroundColor: `rgba(255, 255, 255, 0.1)`
                  , borderRadius: '1em', padding: '2em', elevation: '10em',

               }}>
                  <h3 style={{ fontSize: '4em', fontFamily: 'Praise', }}>{type} <h1 style={{ color: '#00A19D' }}>{name}</h1></h3>
                  <br></br>
                  <h2 style={{ fontSize: '1.3em', fontFamily: 'monospace', fontWeight: 'bold' }} >
                     {desc}
                  </h2>
                  <div style={{ marginTop: '1.5em', display: 'flex', justifyContent: 'space-around' }}>


                  </div>
                  <br></br>
                  <div style={{ marginTop: '1.5em', display: 'flex', justifyContent: 'space-around' }}>

                     <Button onClick={handleClick} style={{ borderRadius: '3em', backgroundColor: '#FF87CA', padding: '0.4em' }}>More Details...</Button>
                  </div>
               </Col>
            </div>
         </ReactCardFlip>

      </div>
   )
}
