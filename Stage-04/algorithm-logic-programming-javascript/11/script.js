const students = [
  {
    name: "Larissa",
    firstTest: 5.5,
    secondTest: 6.8
  },
  {
    name: "João",
    firstTest: 7.5,
    secondTest: 8.0
  },
  {
    name: "Maria",
    firstTest: 9.0,
    secondTest: 10.0
  },
  {
    name: "Francisco",
    firstTest: 4.5,
    secondTest: 5.8
  }
]

function calculateAverage(firstTest, secondTest) {
  return (firstTest + secondTest) / 2
}

for (let student of students) {
  const average = calculateAverage(student.firstTest, student.secondTest)
  
  let isAprovedOrIsDisapproved = average >= 7 ? `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!` : `Não foi dessa vez, ${student.name}! Tente novamente!`

  alert(`A média do(a) aluno(a) ${student.name} é: ${average}.\n${isAprovedOrIsDisapproved}`)
}
