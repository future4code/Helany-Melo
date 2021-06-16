
  // Exercicio1
  //a.Será impresso três objetos diferentes com os nomes e apelidos
  //b. Será impresso somente os primeiros nomes
  //c. Será impressso somente os dois primeiros nomes e 'chijo' ficará de fora

// Exercício de Escrita

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//   ]

//  const arrayNomes = pets.map((inputNome, inputRaca, array) =>{
//      return inputNome.nome
//  })

//  console.log(arrayNomes)

// const buscarDogSalsicha = pets.filter(p => p.raca=="Salsicha");
//     buscarDogSalsicha.forEach(p=>{
//         console.log(p)
//     })


// const descontoPoodle = pets.filter ((pets) =>{
//   return pets.raca === "Poodle"
// }).map((pets) =>{
//   return pets.nome

  
// })

// console.log(`Você ganhou 10% de desconto para tosar o/a ${descontoPoodle}`)
   

    
    










const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }

]

    //a const arrayProdutos = produtos.map ((inputNome, inputCategoria, inputPreco, array) =>{
    //     return inputNome.nome

    // })

    // console.log(arrayProdutos)

    const precoComDesconto = produtos.map((item) => {
      return { nome: item.nome, preco: 0.05 * item.preco }
  })
    console.log(precoComDesconto)
  
  
  










    //c const buscarBebidas = produtos.filter(bebida=>bebida.categoria =="Bebidas");
    // buscarBebidas.forEach(bebida=>{
    //     console.log(bebida)
    // })



    //d const buscarProdutosYpe = produtos.filter(p => p.nome.includes("Ypê"))
    // console.log(buscarProdutosYpe)


  


  //e   const produtosYpe = produtos.filter((produtos) => {
  //     return produtos.nome.includes("Ypê")
  // })
  
  // const mensagemPreco = produtosYpe.map((item) => {
  //     return `Compre o produto ${item.nome} por ${item.preco}`
  // })
  
  // console.log(mensagemPreco)

  

    
    

   

 




