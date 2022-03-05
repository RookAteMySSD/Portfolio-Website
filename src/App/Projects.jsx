import React, {useState, useEffect} from 'react'
import {sectionBox} from './styles.jsx'
import {Project} from './Project.jsx'

export const Projects = () => {
  return (
    <div style={sectionBox}>
    <Project />
    <Project />
    <Project />
    </div>
  )
}