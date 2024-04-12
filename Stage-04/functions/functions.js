/*
  Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword
*/

function Person(name) {
  this.name = name
  this.walk = function() {
    return this.name + " está andando..."
  }
}

const rafa = new Person("Rafa")
const joao = new Person("João")

console.log(rafa.walk())
console.log(joao.walk())

let date = new Date("2024-04-12")
console.log(date)
