// for...in

let person = {
  name: 'Maria',
  age: 20,
  weight: 54.2
}

for (let property in person) {
  console.log(property)
  console.log(person[property])
}