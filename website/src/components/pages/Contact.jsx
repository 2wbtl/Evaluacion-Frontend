import React from 'react'
import FormContact from '../molecules/FormContact';

const Contact = () => {
  return (
    <div className="column-12 column-tab-8 column-lap-9">

      <div className="contact">
        <div className="contact__intro">
          <h2 className="text-title text-title text-secondary">Comunicate con nosotros</h2>
          <p className="text-subtitle">Dudas? comentarios? llena este formulario</p>
        </div>
        <div className="contact__form template">
          <FormContact />
        </div>
      </div>
    </div>

  )
}

export default Contact
