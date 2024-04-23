/*
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

// peso / (altura * altura)

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

const IMC = (weight, height) => {
  return (weight / (height / 100) ** 2).toFixed(2)
}

const printPatientIMC = (patient) => {
  return `
    Paciente ${patient.name} possui o IMC de: ${IMC(patient.weight, patient.height)}
  `
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}
