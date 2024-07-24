import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notNumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

form.onsubmit = function(event) {
  event.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightNotANumber = notNumber(weight) || notNumber(height)

  if (weightOrHeightNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()
  
  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

const displayResultMessage = (result) => {
  const message = `Seu IMC é ${result}`

  Modal.message.innerText = message
  Modal.open()
}

