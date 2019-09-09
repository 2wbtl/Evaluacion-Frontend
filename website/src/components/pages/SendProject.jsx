import React, { useState } from 'react'
import UploadImage from '../molecules/UploadImage';
import FormUpload from '../molecules/FormUpload';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
); //Validador para email

const urlRegex = RegExp(
  "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"
); //Validador para url

const SendProject = () => {

  // Estados
  const [valueInputs, setValueInputs] = useState({})
  const [errorInputs, setErrorInputs] = useState({})

  const handleInput = event => {
    const { name, value } = event.target
    const error = {}
    error[name] = handleErrors(event.target)

    setValueInputs({
      ...valueInputs,
      [name]: value,
    })

    setErrorInputs({
      ...errorInputs,
      ...error
    })

  }

  const uploadNewImage = e => {
    let file = e.target.files[0]

    let reader = new FileReader();
    reader.onload = imageUploaded;
    reader.readAsDataURL(file);

    function imageUploaded(e) {
      let image = e.target.result;
      setValueInputs({
        ...valueInputs,
        image
      })
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const inputsCollection = Array.from(e.target.querySelectorAll('[name]')) //Coleccion de inputs a validar

    const errorSubmit = {} //captura de errores

    inputsCollection.map(input => {
      return errorSubmit[input.name] = handleErrors(input)
    })

    setErrorInputs({
      ...errorSubmit
    })
  }

  const handleErrors = element => {
    const { name, value } = element
    switch (name) {

      case "file":
        const errorFile = element.files.length === 0
          ? "Se necesita una imagen"
          : ""
        return errorFile
      case "repo":
        const errorRepo = !(urlRegex.test(value)) || value === ""
          ? "Ingresa una repo valida"
          : ""
        return errorRepo

      case "link":
        const errorLink = !(urlRegex.test(value)) || value === ""
          ? "Ingresa un link valido"
          : ""
        return errorLink

      case "name":
        const nameError = (value.length > 0 && value.length < 3) || value === ""
          ? "Se requiere 3 caracteres como minimo"
          : ""
        return nameError

      case "email":
        const emailError = !(emailRegex.test(value)) || value === ""
          ? "Email no valido"
          : ""
        return emailError

      case "message":
        const messageError = value.length <= 0 || value === ""
          ? "Introduce un mensaje"
          : ""
        return messageError

      default:
        console.log('error inesperado')
        break
    }
  }

  return (
    <div className="column-12 column-tab-8 column-lap-9">

      <div className="sendproject">

        <h2 className="sendproject__title text-title text-secondary">Envia tu proyecto y se parte de la comunidad!</h2>

        <form className="sendproject__form template" onSubmit={handleSubmit}>
          <div className="column-12 column-tab-4">
            <UploadImage valueInputs={valueInputs} errors={errorInputs} handleInput={handleInput} uploadNewImage={uploadNewImage} />
          </div>
          <div className="column-12 column-tab-8">
            <FormUpload errors={errorInputs} handleInput={handleInput} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SendProject
