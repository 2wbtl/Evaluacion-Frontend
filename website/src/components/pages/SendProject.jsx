import React from 'react'
import UploadImage from '../molecules/UploadImage';
import FormUpload from '../molecules/FormUpload';

const SendProject = () => {
  return (
    <div className="column-12 column-tab-8">
      <div className="sendproject">
        <div className="sendproject-intro">
          <h2 className="sendproject-intro__title text-title text-secondary">Envia tu proyecto</h2>
        </div>
        <div className="sendproject-upload debug">
          <h3 className="sendproject-upload__title debug">Preview</h3>
          <UploadImage />
        </div>
        <div className="sendproject-form debug">
          <h3 className="sendproject-form__title">Links</h3>
          <FormUpload />
        </div>
      </div>
    </div>
  )
}

export default SendProject
