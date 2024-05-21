const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const randomNumber = Math.round(Math.random() * 10)
let xAttenpts = 1

// funções callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    screen2.querySelector("h2").innerText = `Acertou em ${xAttenpts} tentativas!`
  }

  inputNumber.value = ""
  xAttenpts++
}

function handleResetClick() {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")

  xAttenpts = 1
}

// Eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)