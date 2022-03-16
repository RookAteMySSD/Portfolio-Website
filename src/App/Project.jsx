import React, {useState, useEffect} from 'react'
import './AppStyles.css'

export const Project = ({project}) => {
  return (
    <div className='sectionBox'>
    <h4 className='sectionBox'>{project.name}</h4>
    <div className='sectionBox'>{project.description}</div>
    <div className='sectionBox'>{project.tech.map((tech) => <a className='techBox'>{tech}</a>)}</div>
    </div>
  )
}