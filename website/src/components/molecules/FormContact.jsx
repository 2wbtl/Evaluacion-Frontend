import React from 'react'
import Button from '../atoms/Button';

const FormContact = ({ }) => {
  return (
    <form className="form-contact column-12 column-lap-8">
      <input name="name" className={`form-contact__input $`} type="text" placeholder="Nombres" />
      <input name="email" className="form-contact__input" type="text" placeholder="Email" />
      <input name="number" className="form-contact__input" type="text" placeholder="Numero" />
      <textarea name="message" className="form-contact__textarea" type="text" placeholder="Escribe tu mensaje" />
      <span className="form-contact__button">
        <Button name="Enviar" />
      </span>
    </form>
  )
}

export default FormContact
