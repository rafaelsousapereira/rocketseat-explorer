import { Modal } from './modal.js'

// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function(event) {
  event.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notNumber(weight) || notNumber(height)

  if (showAlertError) {
    console.log('mostrar alerta de erro;')
    return;
  }
  
  const result = IMC(weight, height)
  const message = `Seu IMC é ${result}`

  Modal.message.innerText = message
  Modal.open()
}

function notNumber (value) {
  return isNaN(value) || value == ""
}

const IMC = (weight, height) => {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}