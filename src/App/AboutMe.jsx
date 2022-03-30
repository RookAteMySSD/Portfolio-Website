import React, {useState, useEffect} from 'react'
import {PersonalData} from '../PersonalData.js'
import './AppStyles.css'

export const AboutMe = () => {
  return (
    <div id='aboutMe'>
      <div style={{maxWidth: '75%'}}>
        <h3 style={{margin: '5px'}}>I'm Ronin</h3>
        <h4 style={{margin: '5px'}}>I am a software engineer and I build full-stack applications with a focus on good user experience and functionality</h4>
        <p style={{margin: '5px'}}>
          I am passionate about creating software that is easy to use, efficient, and useful to consumers.
          <br/>I have had extensive experience working with people of all backgrounds through my volunteering, and through that have honed my communication skills as well as learning to recognise and attend to consumer needs in an efficient manner
        </p>
        <div>
          <img src='./IMG/GitHub.png' className='icon' onClick={() => {location.href=`${PersonalData.github}`}}></img>
          <img src='./IMG/LinkedIn.png' className='icon'
          onClick={() => {location.href=`${PersonalData.linkedin}`}}></img>
        </div>
      </div>
      <img src="./IMG/Me.jpg" id="portrait"></img>
    </div>
  )
}