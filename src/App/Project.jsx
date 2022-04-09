import React, {useState, useEffect} from 'react'
import './AppStyles.css'

export const Project = ({project}) => {
  return (
    <div className='projectBox'>
    <h4 className='projectTitle'><a href={project.github} target="_blank">{project.name}</a></h4>
    <div className='sectionBox'>{project.description}</div>
    <div className='techHolder'>{project.tech.map((tech) => <div className='techBox'>{tech}</div>)}</div>
    </div>
  )
}