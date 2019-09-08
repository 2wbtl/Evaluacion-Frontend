import React from 'react'

// Estados
const [valueInputs, setValueInputs] = useState({})
const [errorInputs, setErrorInputs] = useState({})
const withFormValidate = (WrappedComponent) => {
  return class extends React.Component {


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

      // Validar antes de enviar: true o false para mostrar respectivo mensaje
      let isFormValid = validateAllForm(valueInputs, errorInputs)


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
            ? "Ingresa un link valido"
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

    const validateAllForm = (values, errors) => {
      let isValid = true
      Object.values(values).map(value => (value === null || value.length === 0) && (isValid = false))
      Object.values(errors).map(error => error.length > 0 && (isValid = false))
      return isValid
    }
    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }
}

export default withFormValidate