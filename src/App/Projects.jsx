import React, {useState, useEffect} from 'react'
import {Project} from './Project.jsx'
import {ProjectsData} from '../ProjectsData.js'
import './AppStyles.css'

export const Projects = () => {
  return (
    <div>
      {ProjectsData.map((project) => <Project project={project}/>)}
    </div>
  )
}