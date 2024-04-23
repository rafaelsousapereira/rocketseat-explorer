let numberOne = Number(prompt("Digite o primeiro número"))
let numberTwo = Number(prompt("Digite o segundo número"))


const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

const isEvenOrIsOdd = sum % 2 === 0 ? "é par" : "é ímpar"
const checkEquals = numberOne === numberTwo ? "são iguais" : "são diferentes"

alert(`Os dois números inseridos ${checkEquals}`)
alert(`A soma dos dois números é: ${sum}`)
alert(`A soma dos dois números ${isEvenOrIsOdd}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${multi}`)
alert(`A divisão dos dois números é: ${div.toFixed(2)}`)
alert(`O resto da divisão dos dois números é: ${restDiv.toFixed(2)}`)
