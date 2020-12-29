import React from 'react'
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
export default function Root() {
    return (
      <>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
      </>
    )
  }