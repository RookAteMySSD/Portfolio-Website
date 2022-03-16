import React, {useState, useEffect} from 'react'
import {PersonalData} from '../PersonalData.js'
import './AppStyles.css'

export const AboutMe = () => {
  return (
    <div className='sectionBox'>
        {PersonalData.aboutMe}
      <div style={{'float': "right"}}>image here</div>
      <div className='iconBox'>
        <img src='./IMG/GitHub.png' className='icon' onClick={() => {location.href=`${PersonalData.github}`}}></img>
        <img src='./IMG/LinkedIn.png' className='icon'
        onClick={() => {location.href=`${PersonalData.linkedin}`}}></img>
      </div>
    </div>
  )
}