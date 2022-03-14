import React, {useState, useEffect} from 'react'
import {sectionBox, icon} from './styles.jsx'

export const AboutMe = () => {
  return (
    <div style={sectionBox}>
      this section will talk about me
      <div style={{'float': "right"}}>image here</div>
      <div style={sectionBox}>
        <img src='./IMG/GitHub.png' style={icon} onClick={() => {location.href='https://github.com/RookAteMySSD'}}></img>
        <img src='./IMG/LinkedIn.png' style={icon}
        onClick={() => {location.href='https://www.linkedin.com/in/ronin-lombardino/'}}></img>
      </div>
    </div>
  )
}