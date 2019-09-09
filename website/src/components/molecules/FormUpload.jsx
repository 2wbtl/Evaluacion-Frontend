import React from 'react'
import Button from '../atoms/Button';

const FormUpload = ({ errors, handleInput }) => {
  return (
    <div className="form-upload">

      <p className="form-upload__title text-subtitle text-bold">Links</p>

      <label htmlFor="" className="form-upload__label">
        <span className="form-upload__icon">
          <img src={require('../../images/svg/link-alt.svg')} alt="" />
        </span>
        <input name="link"
          className={`form-upload__input ${errors.link && 'error-input'}`}
          type="text"
          placeholder="https://"
          onBlur={handleInput}
        />
      </label>
      {
        errors.link
          ? <span className="error-message">{errors.link}</span>
          : null
      }

      <label htmlFor="" className="form-upload__label">
        <span className="form-upload__icon">
          <img src={require('../../images/svg/github-alt.svg')} alt="" />
        </span>
        <input
          name="repo"
          className={`form-upload__input ${errors.repo && 'error-input'}`}
          type="text"
          placeholder="https://github.com/"
          onBlur={handleInput}
        />
      </label>
      {
        errors.repo
          ? <span className="error-message">{errors.repo}</span>
          : null
      }

      <div className="form-upload__button">
        <Button name="Registrar" stylesButton="hola" />
      </div>

    </div>
  )
}

export default FormUpload
