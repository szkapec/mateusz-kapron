import React from 'react'
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
export default function Root() {
    return (
      <>
        <Nav show={false}/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
      </>
    )
  }