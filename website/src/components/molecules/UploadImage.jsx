import React from 'react'

const UploadImage = () => {
  return (
    <label htmlFor="uploadimage" className="uploadimage">
      <span className="uploadimage__icon font-icon">cloud_upload </span>
      <span className="uploadimage__text text-content debug">Adjunta tu preview</span>
      <input id="uploadimage" type="file" className="uploadimage-input" />
    </label>
  )
}

export default UploadImage
