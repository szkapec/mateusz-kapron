import React, {useContext} from 'react'
import {CartContext} from '../Context/Context';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

export default function Root() {
    const ctx = useContext(CartContext);

    return (
      <>
        <Home db={ctx.data}/>
        <About db={ctx.data}/>
        <Skills db={ctx.data} />
        <Projects db={ctx.data}/>
        <Footer db={ctx.data}/>
      </>
    )
  }