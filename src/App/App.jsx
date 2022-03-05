import React, {useState, useEffect} from 'react'
import {AboutMe} from './AboutMe.jsx'
import {Projects} from './Projects.jsx'

export const App = () => {
  return (
    <div>
      <AboutMe />
      <Projects />
    </div>
  )
}