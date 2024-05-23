// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)
let xAttenpts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleEnterKey)

// funções
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttenpts} tentativas!`
  }

  handleLimitNumbers()
  
  handleEmptyValue()

  inputNumber.value = ""
  xAttenpts++
}


function handleResetClick() {
  toggleScreen()
  xAttenpts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function handleEnterKey(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleLimitNumbers() {
  if (inputNumber.value < 0 || inputNumber.value > 10) {
    alert("O número do jogo deve ser entre 0 e 10")
  }
}

function handleEmptyValue() {
  if (inputNumber.value == "") {
    alert("Digite um número para jogar")
  }
}