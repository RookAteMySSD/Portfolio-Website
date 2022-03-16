import React, {useState, useEffect} from 'react'
import {AboutMe} from './AboutMe.jsx'
import {Projects} from './Projects.jsx'
import {background} from './styles.jsx'
import './AppStyles.css'

export const App = () => {
  return (
    <div id='background'>
      <AboutMe />
      <Projects />
    </div>
  )
}