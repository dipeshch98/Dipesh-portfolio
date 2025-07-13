import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div className='bg-slate-800 text-white'>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Landing
