// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condições então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos

// Café da manhã
let pao = true
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

// Maior de 18
let age = 16
const canDrive = age >= 18 ? 'can drive' : "can't drive"

console.log(canDrive)