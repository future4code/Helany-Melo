// EXERCÍCIO 01
function inverteArray(array) {
   
    const inverterArray = array.map((valor, i) => 
    array[array.length - 1 - i]);
    return inverterArray



}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let numerosPares = []
  for (let i =0; i < array.length; i++){
    if(array[i] % 2 === 0){
      numerosPares.push(array[i])

    }
    
  }
    return numerosPares

}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for(let i =0; i< array.length; i++){
    if(array[i] > maiorNumero){
      maiorNumero = array[i]
    }
  }
  return maiorNumero

}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
      return array.length
    
  }

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 
 
   const a = booleano1 && booleano2 && !booleano4
   const b = (booleano1 && booleano2) || !booleano3
   const c = (booleano2 || booleano3) && (booleano4 || booleano1) 
   const d = !(booleano2 && booleano3) || !(booleano1 && booleano3) 
   const e  = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
 
   const resposta = [a, b, c, d, e]
 
   return resposta

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  for (let i = 0; i < array.length; i++) {
    for (let a = 0; a < array.length; a++) {
        if (array[a] > array[a + 1]) {
            let temporario = array[a];
            array[a] = array[a + 1];
            array[a + 1] = temporario;
        }
    }
}

return [array[array.length - 2], array[1]]

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {
  const dadosFilme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
}
        return dadosFilme

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const dadosFilme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
}
      return `Venha assistir ao filme ${dadosFilme.nome}, de ${dadosFilme.ano}, dirigido por ${dadosFilme.diretor} e estrelado por ${dadosFilme.atores[0]}, ${dadosFilme.atores[1]}, ${dadosFilme.atores[2]}, ${dadosFilme.atores[3]}.`
}
     


// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  dadosRetangulo = {
    largura: (lado1),
    altura: (lado2),
    perimetro: (2* (lado1 + lado2)),
    area: (lado1*lado2)
  }
  return dadosRetangulo

}



// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
