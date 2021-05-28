
// a. Será impresso undefined

//será impresso "null"


//c.  Será impresso o número 11, que o tamanho da array


//d. Será impresso o número 3

// e. Será mpresso uma array com 11 elementos, incluindo o número 19, que ficou no lugar 4 



// Será impresso o núemro 9

//2
//A letra "A" foi substituida por "I" e a frase foi modificada para maiúsculas.

//exercício de escrita
//1
const nome = prompt("Qual o seu nome?")
const email = prompt("Digite o seu e-mail?")

console.log(`O e-mail, ${email} foi cadastrado com sucesso. Seja bem-vinda(o) ${nome}.`)

//2

const comidasPreferidas = ["lasanha", "churrasco", "taco", "hamburguer", "macarrão"]
console.log("Essas são minhas comidas preferidas", comidasPreferidas)
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])




const comidaPreferida = prompt("Qual a sua comida preferida?")
comidasPreferidas[1] = comidaPreferida
console.log(comidasPreferidas)

let listaDeTarefas=[]
let tarefa1 = prompt("Qual a primeira tarefa que você faz quando acorda?")
let tarefa2 = prompt("Qual a segunda tarefa que você faz quando acorda?")
let tarefa3 = prompt("Qual a terceira tarefa que você faz quando acorda?")
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)

let atividadeRealizada = prompt("Qual tarefa da lista você já realizou, 0, 1 ou 2 ?")
console.log(atividadeRealizada)

let listaTarefas = listaDeTarefas.splice(0,1)

console.log(listaTarefas)
console.log(listaDeTarefas)


