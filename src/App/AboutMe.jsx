import React, {useState, useEffect} from 'react'
import {sectionBox, icon} from './styles.jsx'
import {PersonalData} from '../PersonalData.js'

export const AboutMe = () => {
  return (
    <div style={sectionBox}>
        {PersonalData.aboutMe}
      <div style={{'float': "right"}}>image here</div>
      <div style={sectionBox}>
        <img src='./IMG/GitHub.png' style={icon} onClick={() => {location.href=`${PersonalData.github}`}}></img>
        <img src='./IMG/LinkedIn.png' style={icon}
        onClick={() => {location.href=`${PersonalData.linkedin}`}}></img>
      </div>
    </div>
  )
}