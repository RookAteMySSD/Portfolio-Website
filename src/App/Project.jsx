import React, {useState, useEffect} from 'react'
import {sectionBox} from './styles.jsx'

export const Project = () => {
  return (
    <div style={sectionBox}>
    <h4 style={sectionBox}>Title</h4>
    <div style={sectionBox}>info about project</div>
    <div style={sectionBox}>tech used</div>
    </div>
  )
}