import React, {useState, useEffect} from 'react'
import {sectionBox} from './styles.jsx'
import {Project} from './Project.jsx'
import {ProjectsData} from '../ProjectsData.js'

export const Projects = () => {
  return (
    <div style={sectionBox}>
      {ProjectsData.map((project) => <Project project={project}/>)}
    </div>
  )
}