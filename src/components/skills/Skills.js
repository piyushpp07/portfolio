import React from 'react'
import { motion } from 'framer-motion'
import { Col, Container, Row } from 'react-bootstrap'
import ProgressBar from './ProgressBar'
const variants = {
   hidden: { opacity: 0, x: 200 },
   visible: { opacity: 1, x: 0 },
};
const left = {
   hidden: { opacity: 0, x: -200 },
   visible: { opacity: 1, x: 0 },
}
const testData = [
   { bgcolor: "#6a1b9a", completed: 90, name: 'C++' },
   { bgcolor: "#00695c", completed: 80, name: 'Javascript' },
   { bgcolor: "#ef6c00", completed: 60, name: 'Python' },
];
const skills = [
   { bgcolor: "#6a1b9a", completed: 80, name: 'ReactJs' },
   { bgcolor: "#00695c", completed: 80, name: 'React Native' },
   { bgcolor: "#324F60", completed: 70, name: 'My SQL' },
   { bgcolor: "#ef6c00", completed: 50, name: 'ExpressJs' },
   { bgcolor: "#418A36", completed: 50, name: 'MongoDB' },
];

export default function Skills(props) {
   const { isDark } = props
   { console.log(isDark) }
   return (
      <motion.div id="skills" style={{ marginTop: '8rem', color: isDark ? 'white' : 'black' }} >
         <Container style={{ fontFamily: 'Ubuntu', color: isDark ? 'white' : 'black' }} >
            <Row style={{}}>
               <Col xs={20} md={4} >
                  <motion.div variants={left} initial="hidden" animate="visible">
                     <h2 style={{ fontFamily: 'Dancing Script', fontSize: '3em' }}>Skills</h2>
                     {skills.map((item, idx) => (
                        <>
                           <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} name={item.name} />
                        </>
                     ))}
                  </motion.div>
               </Col>
               <Col md={4}>
               </Col >
               <Col xs={12} md={4} >
                  <motion.div variants={variants} initial="hidden" animate="visible" transition="delay" whileHover={{ scale: 1.1 }}>
                     <h2 style={{ fontFamily: 'Dancing Script', fontSize: '2.5em' }}>Programming Languages</h2>
                     {testData.map((item, idx) => (
                        <>
                           <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} name={item.name} />
                        </>
                     ))}
                  </motion.div>
               </Col>
            </Row>
         </Container >
      </motion.div >
   )
}
