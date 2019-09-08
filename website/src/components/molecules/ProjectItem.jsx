import React from 'react'
import PropTypes from 'prop-types'

const ProjectItem = ({ name }) => {
  return (
    <div className="column-12 column-tab-6 column-lap-4">
      <div className="project-item">
        <img className="project-item__image" src={require(`../../images/${name}-responsive.jpg`)} alt="imagen proyecto" />
        <div className="project-links d-flex">
          <div className="project-links__view d-flex justify-content-center align-items-center">
            <img src={require('../../images/svg/link.svg')} alt="imagen link" />
            <a href="#" className="">Ver el proyecto</a>
          </div>
          <div className="project-links__repo d-flex justify-content-center align-items-center">
            <img src={require('../../images/svg/github.svg')} alt="imagen link" />
            <a href="#" className="">Ir al repositorio</a>
          </div>
        </div>
      </div>
    </div>
  )
}

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired
}

export default ProjectItem
