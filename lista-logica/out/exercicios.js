// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  let altura = Number(prompt("Digite o valor da altura do retangulo"))
  let largura = Number(prompt("Digite o valor da largura do retangulo"))
  let resultado = largura * altura
  console.log(resultado)
}

// Exercício 2
function imprimeIdade() {
  let anoAtual = (prompt("Digite o ano atual"))
  let anoDeNascimento = (prompt("Digite a data de nascimento?"))
  let idade = (anoAtual - anoDeNascimento)
  console.log(idade)
}
  

// Exercício 3
function calculaIMC() {
  let pesoKg = (prompt("Digite o ano atual"))
  let altura = (prompt("Digite a data de nascimento?"))
  let imc = (pesoKg/(altura*altura))
  console.log(imc)
  
}

// Exercício 4
function imprimeInformacoesUsuario() {
  let nome = (prompt("Qual o seu nome?"))
  let idade = (prompt("Qual a sua idade?"))
  let email = (prompt("Qual o seu e-mail?"))

  console.log("Meu nome é "  + nome +    ", tenho " + idade +  " anos," +  " e o meu email é " + email + ".")
  
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  let cor1 = (prompt("Quais é favorita?"))
  let cor2 = (prompt("Quais é favorita?"))
  let cor3 = (prompt("Quais é favorita?"))
 
  
  console.log([cor1, cor2, cor3])

  
}

// Exercício 6
function retornaStringEmMaiuscula() {
  let nome = (prompt("Qual é o seu nome?"))
  let resultado = nome.toUpperCase();
  console.log(resultado)
}

// Exercício 7
function calculaIngressosEspetaculo() {
  let espetaculo = (prompt("Quanto custa o espetaculo?"))
  let ingresso = (prompt("Quanto custa o ingresso?"))
  let resultado = (espetaculo/ingresso)
  console.log(resultado)

}

// Exercício 8
function checaStringsMesmoTamanho() {
  let string1 = (prompt("Digite a primeira palavra?"))
  let string2 = (prompt("Digite a segunda palavra?"))
  
  let resultadoComparacao = (string1>=string2);
  console.log(resultadoComparacao)
  
  

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let string1 = (prompt("Digite a primeira palavra?"))
  let string2 = (prompt("Digite a segunda palavra?"))
  let result =(string1.toLowerCase() == string2.toLowerCase())

  console.log(result)

  
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Digite o ano atual?"))
  const anoDeNascimento = Number(prompt("Digite o seu ano de Nascimento"))
  const emissaoIdentidade = Number(prompt("Digite a emissão do seu RG"))

  const idade = anoAtual - anoDeNascimento
  console.log(idade)
  
  const tempoEmissao = anoAtual - emissaoIdentidade
  console.log(tempoEmissao)
  

  console.log(((idade <=20 && tempoEmissao >= 5) || (idade >20 && idade <=50 && tempoEmissao >=10) || (idade > 50 && tempoEmissao >=15)))
  



}
 

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = Number(prompt("Digite um ano qualquer e descubra se ele é bissexto"))
  console.log (((ano % 400 == 0) ||  ((ano % 4 == 0) &&  (ano % 100 != 0))))
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const idade = prompt("Você é maior de 18 anos?")
  const ensinoMedio = prompt("Você tem ensino médio completo?")
  const horarioDisponivel = prompt("Você possue horário disponível durante o horário do curso?")

  console.log(idade =="sim" && ensinoMedio == "sim" && horarioDisponivel == "sim")


}


