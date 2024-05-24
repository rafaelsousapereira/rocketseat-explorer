const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnFortuneCookie = document.querySelector('#btnFortuneCookie')
const btnOpenOtherCookie = document.querySelector('#btnOpenOtherCookie') 

btnFortuneCookie.addEventListener('click', handleClick)
btnOpenOtherCookie.addEventListener('click', handleClick)

function handleClick() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}