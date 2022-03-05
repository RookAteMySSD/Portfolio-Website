import React, {useState, useEffect} from 'react'
import {sectionBox} from './styles.jsx'

export const Project = ({project}) => {
  return (
    <div style={sectionBox}>
    <h4 style={sectionBox}>{project.name}</h4>
    <div style={sectionBox}>{project.description}</div>
    <div style={sectionBox}>{project.tech.map((tech) => <div>{tech}</div>)}</div>
    </div>
  )
}