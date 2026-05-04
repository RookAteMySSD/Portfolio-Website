import React, {useState, useEffect} from 'react'
import {AboutMe} from './AboutMe.jsx'
import {Languages} from './Languages.jsx'
import {Projects} from './Projects.jsx'
import {Footer} from './Footer.jsx'
import './AppStyles.css'

export const App = () => {
  /*return (
    <div>
      <div id='mainBackground'>
        <AboutMe />
        <Languages />
        <Projects />
      </div>
      <Footer />
    </div>
  )*/
  return (
    <div id='mainBackground'>
      This site is currently being redesigned.
      Contact me via email or LinkedIn for more information about my work and experience.
    </div>
  )
}