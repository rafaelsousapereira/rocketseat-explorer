// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let isString = prompt("Digite um texto:")

if (Number(isString)) {
  alert("Não é uma string")
} else {
  alert("É uma string")
}