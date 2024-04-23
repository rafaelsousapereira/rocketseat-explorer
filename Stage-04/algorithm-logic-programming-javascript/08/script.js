/*
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes, suas idades, alturas e pesos
*/

const patients = [
  {
    name: "João",
    age: 17,
    weight: 70,
    height: 190
  },
  {
    name: "Maria",
    age: 12,
    weight: 50,
    height: 163
  },
  {
    name: "Enzo",
    age: 15,
    weight: 60,
    height: 170
  }
]

const patientsNames = []

for (let patient of patients) {
  let patientsInfo = `
    Paciente ${patient.name} 
    tem ${patient.age} anos de idade, 
    pesa ${patient.weight} kg 
    e tem ${patient.height} de altura
  `

  patientsNames.push(patientsInfo)
}

alert(patientsNames)