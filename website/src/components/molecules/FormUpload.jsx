import React from 'react'
import Button from '../atoms/Button';

const FormUpload = () => {
  return (
    <div className="formupload">
      <label htmlFor="" className="formupload-label">
        <img src={require('../../images/svg/link-alt.svg')} alt="" />
        <input type="text" placeholder="https://" />
      </label>
      <label htmlFor="" className="formupload-label">
        <img src={require('../../images/svg/github-alt.svg')} alt="" />
        <input type="text" placeholder="https://github.com/" />
      </label>
      <Button name="Registrar" />
    </div>
  )
}

export default FormUpload
