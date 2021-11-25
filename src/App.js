import React, { useState, useEffect } from 'react'
import Header from './components/header/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Content1 from './components/Content1/Content1';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import ContactMe from './components/Contact/ContactMe';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import { BoltLoader } from "react-awesome-loaders";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { zeroRightClassName, fullWidthClassName, noScrollbarsClassName } from 'react-remove-scroll-bar';
import { RemoveScrollBar } from 'react-remove-scroll-bar';

function App() {
  const onChange = (t) => { setDarktheme(t) };
  const [loading, setLoading] = useState(false)
  const [darkTheme, setDarktheme] = useState(true)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])
  return (
    <BrowserRouter>
      {loading ?
        <div class='loder'>
          <BoltLoader
            className="loaderbolt"
            boltColor={"#FBFF00"}
            backgroundBlurColor={"#E0E7FF"}
          />
        </div> : <div style={{ backgroundColor: darkTheme ? '#171C28' : '#FFFFFF', height: '100%', width: '100%', overflow: 'hidden' }}  >

          <Header isDark={darkTheme} parentCallback={onChange} />
          <Intro id="intro" isDark={darkTheme} />
          <Content1 id="whatido" isDark={darkTheme} />
          <h2 style={{ textAlign: 'center', marginTop: '3em', alignSelf: 'center', fontFamily: 'Praise', fontSize: '4em', color: darkTheme ? "white" : 'black' }}>Skills And Abilities</h2>
          <Skills isDark={darkTheme} />
          <h2 style={{ textAlign: 'center', marginTop: '3em', alignSelf: 'center', fontFamily: 'Praise', fontSize: '4em', color: darkTheme ? "white" : 'black' }}>Projects</h2>
          <Projects isDark={darkTheme} />
          <Experience isDark={darkTheme} />
          <ContactMe isDark={darkTheme} />
        </div >}

    </BrowserRouter >

  );
}

export default App;
