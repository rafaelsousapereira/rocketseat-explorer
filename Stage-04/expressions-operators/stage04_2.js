/*
  * new
    * left-hand-side expression
    * criar um novo objeto
*/

let name = new String('Rafa')
name.surName = 'Sousa'
let age = new Number(25)
console.log(name.surName, age)

let date = new Date('2024-04-15')
console.log(date.__proto__)