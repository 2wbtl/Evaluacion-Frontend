import React from 'react'

const UploadImage = ({ valueInputs, errors, handleInput, uploadNewImage }) => {
  return (
    <div className="upload-image">
      <p className="upload-image__title text-subtitle text-bold">Preview</p>

      <label htmlFor="uploadimage" className={`upload-image__label ${errors.file && 'error-input'}`}>
        <span className="upload-image__icon font-icon">cloud_upload </span>
        <span className="upload-image__text text-content">Adjunta tu preview</span>
        {
          valueInputs.image
            ? <img src={valueInputs.image} className="upload-image__preview" alt="preview de imagen" />
            : null
        }
      </label>
      {
        errors.file
          ? <span className="error-message">{errors.file}</span>
          : null
      }
      <input
        name="file"
        id="uploadimage"
        type="file"
        className="upload-image__input"
        onChange={
          e => {
            handleInput(e)
            uploadNewImage(e)
          }
        }
      />
    </div>

  )
}

export default UploadImage
