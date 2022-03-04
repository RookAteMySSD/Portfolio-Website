import React, {useState, useEffect} from 'react'
import {sectionBox} from './styles.jsx'

export const AboutMe = () => {
  return (
    <div style={sectionBox}>
      this section will talk about me
      <div style={{'float': "right"}}>image of me here</div>
      <div style={sectionBox}>social media links</div>
    </div>
  )
}