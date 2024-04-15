/**
 * Operadores unários
 * typeof
 * delete
 */

const person = {
  name: 'Rafael',
  age: 25
}

// se existir a propriedade ela será deletada
// caso contrário o objeto não sofrerá alteração
delete person.age

console.log(person)
console.log(typeof person)
