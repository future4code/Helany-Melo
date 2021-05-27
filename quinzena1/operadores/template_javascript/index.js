//Exercício de interpretaçao de código
// false
 // false
 // true
 //caso boleano 
 


//Haverá uma concatenação dos número - porque a declaração está porque o prompt é sempre uma string e por isso devemos transformar os números com o parseInt


// Exercício de escrita

// Exercício 1
let idadeUsuario = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

const diferencaDeIdade = parseInt(idadeUsuario)- parseInt(idadeAmigo)

console.log("Sua idade é maior do que do seu melhor amigo", idadeUsuario > idadeAmigo)

//Exercício 2

let numberPar = Number(prompt("Digite um número par?"))
const resultado = numberPar%2
/ console.log(resultado)

//quando dividimos um número par sempre vai dar 0
//quando dividimos um número ímpar fica sempre resto 1

//Exercício 3
let idadeUsuario = Number(prompt("Qual a sua idade?"))
const idadeEmMeses = idadeUsuario * 12
console.log("A sua idade em meses são", idadeEmMeses)
console.log("A sua idade em dias são", idadeUsuario*365)
console.log("A sua idade em horas são", idadeUsuario*8776)

// Exercício 4
let number1 = Number(prompt("Digite um número?"))
let number2 = Number(prompt("Digite um outro número?"))
console.log ("O primeiro número é maior que o segundo:", number1>number2)
console.log ("O primeiro número é igual ao segundo:", number1==number2)
console.log ("O primeiro número é divisível pelo segundo:", number1%number2==0)
console.log ("O segundo número é divisível pelo primeiro:", number2%number1==0)



