import React, {useState, useEffect} from 'react'
import './AppStyles.css'

export const Project = ({project}) => {
  return (
    <div className='sectionBox'>
    <h4 className='projectTitle' onClick={() => {location.href=`${project.github}`}}><span>{project.name}</span></h4>
    <div className='sectionBox'>{project.description}</div>
    <div className='sectionBox'>{project.tech.map((tech) => <a className='techBox'>{tech}</a>)}</div>
    </div>
  )
}