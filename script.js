// Informacion
const form = document.querySelector('#hoja-de-vida')
const nombre = document.querySelector('#nombre')
const edad = document.querySelector('#edad')
const email = document.querySelector('#email')
const telefono = document.querySelector('#telefono')
const direccion = document.querySelector('#direccion')
const ocupacion = document.querySelector('#ocupacion')

// Estudios
const institucion = document.querySelector('#institucion')
const carrera = document.querySelector('#carrera')
const cursando = document.querySelector('#cursando')
const fechaInicio = document.querySelector('#fecha-inicio')
const fechaCulminacion = document.querySelector('#fecha-culminacion')

// Valida si el usuario estar cursando la carrera
cursando.addEventListener('change', (e) => {
  if (e.target.checked) {
    fechaCulminacion.disabled = true
  } else {
    fechaCulminacion.disabled = false
  }
})

// Previene el registro de la hoja de vida cuando los inputs no satisfacen la validacion
form.addEventListener('submit', (e) => {
  const validacion = validarInputs()

  if (!validacion) {
    e.preventDefault()
  }
})

// Crea un mensaje de error en la input especificada
const setError = (element, message) => {
  const inputControl = element.parentElement
  const errorDisplay = inputControl.querySelector('.error')

  errorDisplay.textContent = message
  inputControl.classList.add('error')
  inputControl.classList.remove('success')
}

// Cambia el colos de input cuando satisface la validacion
const setSuccess = (element) => {
  const inputControl = element.parentElement
  const errorDisplay = inputControl.querySelector('.error')

  errorDisplay.textContent = ''
  inputControl.classList.add('success')
  inputControl.classList.remove('error')
}

// Ayuda a validar que email este bien escrito
const validarEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

// Ayuda a validar que el telefono esta bien escrito
const validarTelefono = (telefono) => {
  const re = /^\+[1-9]{1}[0-9]{3,14}$/
  return re.test(String(telefono).toLowerCase())
}

// Validacion de la mayoria de lo inputs
const validarInputs = () => {
  const nombreValor = nombre.value.trim()
  const edadValor = edad.value.trim()
  const emailValor = email.value.trim()
  const telefonoValor = telefono.value.trim()
  const direccionValor = direccion.value.trim()
  const ocupacionValor = ocupacion.value.trim()
  const institucionValor = institucion.value.trim()
  const carrearValor = carrera.value.trim()
  const cursandoValor = cursando.checked
  const fechaInicioValor = fechaInicio.value
  const fechaCulminacionValor = fechaCulminacion.value

  console.log(cursandoValor)
  console.log(fechaInicioValor)
  console.log(fechaCulminacionValor)

  const validacion = [false, false, false, false, false, false, false, false, false, false]

  if (nombreValor === '') {
    setError(nombre, 'Ingrese su nombre completo')
    validacion[0] = false
  } else {
    setSuccess(nombre)
    validacion[0] = true
  }

  if (edadValor === '') {
    setError(edad, 'Ingrese su edad actual')
    validacion[1] = false
  } else {
    setSuccess(edad)
    validacion[1] = true
  }

  if (emailValor === '') {
    setError(email, 'Ingrese su email')
    validacion[2] = false
  } else if (!validarEmail(emailValor)) {
    setError(email, 'Ingrese un email valido, Ejemplo: example@example.com')
    validacion[2] = false
  } else {
    setSuccess(email)
    validacion[2] = true
  }

  if (telefonoValor === '') {
    setError(telefono, 'Ingrese su número telefono')
    validacion[3] = false
  } else if (!validarTelefono(telefonoValor)) {
    setError(telefono, 'Ingrese un numero de telefono valido, Ejemplo: +57123456789')
    validacion[3] = false
  } else {
    setSuccess(telefono)
    validacion[3] = true
  }

  if (direccionValor === '') {
    setError(direccion, 'Ingrese su direccion actual')
    validacion[4] = false
  } else {
    setSuccess(direccion)
    validacion[4] = true
  }

  if (ocupacionValor === '') {
    setError(ocupacion, 'Ingrese su ocupacion actual')
    validacion[5] = false
  } else {
    setSuccess(ocupacion)
    validacion[5] = true
  }

  if (institucionValor === '') {
    setError(institucion, 'Ingrese el nombre de la Institución')
    validacion[6] = false
  } else {
    setSuccess(institucion)
    validacion[6] = true
  }

  if (carrearValor === '') {
    setError(carrera, 'Ingrese el nombre de la carrera')
    validacion[7] = false
  } else {
    setSuccess(carrera)
    validacion[7] = true
  }

  if (fechaInicioValor === '') {
    setError(fechaInicio, 'Ingrese la fecha en la que inicio de su carrera')
    validacion[8] = false
  } else {
    setSuccess(fechaInicio)
    validacion[8] = true
  }

  if (cursandoValor === false) {
    if (fechaCulminacionValor === '') {
      setError(fechaCulminacion, 'Ingrese la fecha en la que culmino de su carrera')
      validacion[9] = false
    } else {
      setSuccess(fechaCulminacion)
      validacion[9] = true
    }
  } else {
    validacion.pop()
  }

  return validacion.reduce((a, b) => a && b)
}
