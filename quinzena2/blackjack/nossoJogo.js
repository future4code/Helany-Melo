/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem-vindo(a) ao jogo de blackjack")
const game = confirm("Quer iniciar uma nova rodada?")

if (game){
    let userCard1 = comprarCarta()
    let userCard2 = comprarCarta()
    let compCard1 = comprarCarta()
    let compCard2 = comprarCarta()

    let pontuacaoUser = userCard1.valor + userCard2.valor
    let pontuacaoComp = compCard1.valor + compCard2.valor

    console.log(`Usuário - cartas: ${userCard1.texto}  ${userCard2.texto}  -  ${pontuacaoUser}`)
    console.log(`Computador - cartas: ${compCard1.texto}  ${compCard2.texto} -  ${pontuacaoComp}`)

    if(pontuacaoUser>pontuacaoComp){
        console.log("O usuário ganhou!")
    }else if(pontuacaoUser<pontuacaoComp){
        console.log("O computador ganhou!")
    }else if (pontuacaoUser === pontuacaoComp){
        console.log("Empate!")
    }
}else{
    console.log("O jogo acabou!")
}
