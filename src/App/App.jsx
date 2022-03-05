import React, {useState, useEffect} from 'react'
import {AboutMe} from './AboutMe.jsx'
import {Projects} from './Projects.jsx'
import {background} from './styles.jsx'

export const App = () => {
  return (
    <div style={background}>
      <AboutMe />
      <Projects />
    </div>
  )
}