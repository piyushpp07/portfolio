import React, { useState } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Lottie from 'react-lottie';
import { SocialIcon } from 'react-social-icons';
import Typewriter from 'typewriter-effect';
export default function Intro(props) {
   const { isDark } = props
   const [isStopped, setIsStopped] = useState(false)
   const [isPaused, setIsPaused] = useState(false)


   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require('../../assets/24972-hi.json'),
      rendererSettings: {
         preserveAspectRatio: 'xMidYMid slice'
      }
   };
   return (
      <div style={{ marginTop: '6em' }}>
         <Container style={{ fontFamily: 'Ubuntu', color: isDark ? "white" : "black " }} >
            <Row >
               <Col xs={20} md={4} style={{
                  boxShadow: `0 8px 32px 0 rgba( 31, 38, 135, 0.37 )`, backgroundColor: `rgba(255, 255, 255, 0.1)`
                  , borderRadius: '1em', padding: '2em', elevation: '10em',

               }}>
                  <h2 style={{ fontSize: '4em', fontFamily: 'Praise', color: 'grey' }}>Hi !, I'm Piyush Paradkar</h2>
                  <br></br>
                  <h2 style={{ fontFamily: 'monospace', fontWeight: 'bold' }} >
                     <Typewriter

                        options={{
                           strings: ['Full Stack Developer', 'React/React Native ', 'MERN Stack developer'],
                           autoStart: true,
                           loop: true,
                        }}
                     />
                  </h2>
                  <div style={{ marginTop: '1.5em', display: 'flex', justifyContent: 'space-around' }}>
                     <SocialIcon network="linkedin" />
                     <SocialIcon network="github" />
                     <SocialIcon network="google" />

                  </div>
                  <br></br>
                  <div style={{ marginTop: '1.5em', display: 'flex', justifyContent: 'space-around' }}>
                     <Button style={{ borderRadius: '3em' }}>Resume</Button>
                     <Button style={{ borderRadius: '3em' }}>Contact</Button>
                  </div>
               </Col>
               <Col md={3}>
               </Col >
               <Col xs={12} md={4} style={{ marginTop: '-4em' }} >
                  <Lottie options={defaultOptions}
                     height={400}
                     width={400}
                     isStopped={isStopped}
                     isPaused={isPaused} />
               </Col>
            </Row>
         </Container >
      </div >
   )
}
