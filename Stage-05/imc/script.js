// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open: function() {
    Modal.wrapper.classList.add('open')
  },
  close: function() {
    Modal.wrapper.classList.remove('open')
  }
}

form.onsubmit = function(event) {
  event.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value
  
  const result = IMC(weight, height)
  const message = `Seu IMC é ${result}`

  Modal.message.innerText = message
  Modal.open()
}

Modal.buttonClose.onclick = () => Modal.close()

const IMC = (weight, height) => {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}