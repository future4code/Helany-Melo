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
  let numerosPares = []
  let contador = 0

  while (contador < n) {
    numerosPares.push(contador * 2)
  
    contador++
  }
  
return numerosPares
  
}



// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a !== b && b !== c && c !== a) {
    return 'Escaleno'
  } else if (a == b && b == c && c == a) {
    return 'Equilátero'
  } else if (a === b && a !== c) {
    return 'Isósceles'
  }
}


// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  if (num1 > num2) {
    comparacaoDosNumeros.maiorNumero = num1
    comparacaoDosNumeros.maiorDivisivelPorMenor = num1 % num2 === 0
    comparacaoDosNumeros.diferenca = num1 - num2

  } else if (num2 > num1) {
    comparacaoDosNumeros.maiorNumero = num2
    comparacaoDosNumeros.maiorDivisivelPorMenor = num2 % num1 === 0
    comparacaoDosNumeros.diferenca = num2 - num1
  }else{
    comparacaoDosNumeros.maiorNumero = num2
    comparacaoDosNumeros.maiorDivisivelPorMenor = num2 % num1 === 0
    comparacaoDosNumeros.diferenca = 0

  }

  return comparacaoDosNumeros
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
  array.sort(function ordenarArray (x, y) {
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
})
      return array

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
  const dadosDePessoas = {
      ...pessoa,
      nome: "ANÔNIMO"
  }
  
      return dadosDePessoas

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const maiores = arrayDePessoas.filter(maior=> maior.idade>=18)
      return maiores
 

}


// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const menores = arrayDePessoas.filter(menor=> menor.idade<18)
      return menores

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const multiplicaPorDois = array.map(dobro => dobro*2)
        return multiplicaPorDois
   }




// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  let novoArray = []
    array.map((numero) => {
      let numeroString = numero * 2
        novoArray.push(numeroString.toString())
  })
          return novoArray
}
  
   
// EXERCÍCIO 17C
function verificaParidade(array) {
  let parImpar = []
  array.map((numero) => {
      if (numero % 2 === 0) {
          parImpar.push(`${numero} é par`)
      } else {
          parImpar.push(`${numero} é ímpar`)
      }
  })
          return parImpar

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
     const pessoasQuePodemEntrar = pessoas.filter(pessoa => pessoa.altura>=1.5 && pessoa.idade>14 && pessoa.idade<60)
       return pessoasQuePodemEntrar

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasQueNaoPodemEntrar = pessoas.filter(pessoa => pessoa.altura<1.5 || pessoa.idade<15 || pessoa.idade>60)
    return pessoasQueNaoPodemEntrar

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  return consultasNome.sort((a, b) => {
    if (a.nome < b.nome) return -1
    return 0
})

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  

}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  return contas.map(conta => {
    return {
        cliente: conta.cliente,
        saldoTotal: conta.saldoTotal - conta.compras.reduce((acumulador, atual) => acumulador += atual, 0),
        compras: conta.compras
    }
})

}
