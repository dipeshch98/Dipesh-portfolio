import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
// import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useTheme } from '../context/ThemeContext'

const Landing = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`${isDark ? 'bg-slate-800 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        {/* <Services/> */}
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Landing
