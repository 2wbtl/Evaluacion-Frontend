import React from 'react'
import ProjectItem from '../molecules/ProjectItem';

const Projects = () => {
  return (
    <div className="main-projects column-12 column-tab-8 column-lap-9">
      <div className="projects-intro ">
        <h2 className="projects-intro__title text-title text-secondary">Proyectos de la comunidad</h2>
        <p className="projects-intro__filter">Ningun filtro aplicado</p>
      </div>
      <div className="template projects-list">
        <ProjectItem name="imagen1" />
        <ProjectItem name="imagen2" />
        <ProjectItem name="imagen3" />
        <ProjectItem name="imagen4" />
      </div>
    </div>
  )
}

export default Projects
