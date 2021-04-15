const player1 = {
    cartas: [
        {numero: 5, naipe: "copas"}, {numero: 5, naipe: "paus"}, {numero: 6, naipe: "espadas"},
        {numero: 7, naipe: "espadas"}, {numero:"13", naipe: "ouros"}
    ]

}

const player2 = {
    cartas: [
        {numero: 2, naipe: "paus"}, {numero: 3, naipe: "espadas"}, {numero: 8, naipe: "espadas"},
        {numero: 8, naipe: "ouros"}, {numero: 12, naipe: "ouros"}
    ]
}

// definindo jogada player 1
function validaCartas1(cartas) {
    
    if (player1.cartas[0] === 10 && player1.cartas[1] === 11 && player1.cartas[2] === 12 && player1.cartas[3] === 13 && player1.cartar[4] === "as" && // numeros royal flush
    player1.cartas[0, 1, 2, 3 ,4] === "ouros"  
    || player1.cartas[0, 1, 2, 3, 4] === "copas" 
    || player1.cartas[0, 1, 2, 3, 4] === "paus" 
    || player1.cartas[0, 1, 2, 3, 4] === "espadas" 
    || player1.cartas[0, 1, 2, 3, 4] === "espadas") { // nipes royal flush
        player1.resultadoDaMao = 10 //"Royal Flush"
    } else if (player1.cartas[0] > player1.cartas[1] && player1.cartas[1] > player1.cartas[2] && player1.cartas[3] > player1.cartas[4]){ // usar for
        player1.resultadoDaMao = 9 //"straight flush"
    } else if (player1.cartas[0] === player1.cartas[1] && player1.cartas[2] === player1.cartas[3] || player1.cartas[4]) {
    player1.resultadoDaMao = 8 //"Quadra"
    } else if (player1.cartas[0] === player1.cartas[1] === player1.cartas[2] && player1.cartas[3] === player1.cartas[4] 
            || player1.cartas[0] === player1.cartas[1] && player1.cartas[2] === player1.cartas[3] === player1.cartas[4]){
        player1.resultadoDaMao = 7 //"Full House"
    } else if (player1.cartas[0] === player1.cartas[1]  === player1.cartas[2] === player1.cartas[3] === player1.cartas[4]){
        player1.resultadoDaMao = 6 //"flush"
    } else if (player1.cartas[0] < player1.cartas[1] && player1.cartas[1] < player1.cartas[2] && player1.cartas[3] < player1.cartas[4]) { // usar for
        player1.resultadoDaMao = 5 //"Sequencia"
    } else if (player1.cartas[0] === player1.cartas[1] === player1.cartas[2] && player1.cartas[3] != player1.cartas[0]){
         player1.resultadoDaMao = 4 //"Trinca"        
    } else if (player1.cartas[0] === player1.cartas[1] && player1.cartas[2] === player1.cartas[3] || player1.cartas[4]
            || player1.cartas[1] === player1.cartas[2] && player1.cartas[3] === player1.cartas[4]) {
        player1.resultadoDaMao = 3 //"dois pares" 
    } else if (player1.cartas[0] === player1.cartas[1] || player1.cartas[0] === player1.cartas[2] || player1.cartas[0] === player1.cartas[3] || player1.cartas[0] === player1.cartas[4] ||
        player1.cartas[1] === player1.cartas[2] || player1.cartas[1] === player1.cartas[3] || player1.cartas[1] === player1.cartas[4] || 
        player1.cartas[2] === player1.cartas[3] || player1.cartas[2] === player1.cartas[4] || 
        player1.cartas[3] === player1.cartas[4]){
            player1.resultadoDaMao = 2 //"um par"
        } else {player1.cartas[0] >= player1.cartas[1] || player1.cartas[1] >= player1.cartas[2] || player1.cartas[3] >= player1.cartas[4]
            player1.resultadoDaMao = 1 }// carta mais alta 

} 
// definindo jogada player 2
function validaCartas2(cartas) {
    
    if (player2.cartas[0] === 10 && player2.cartas[1] === 11 && player2.cartas[2] === 12 && player2.cartas[3] === 13 && player2.cartar[4] === "as" && // numeros royal flush
    player2.cartas[0, 1, 2, 3 ,4] === "ouros"  
    || player2.cartas[0, 1, 2, 3, 4] === "copas" 
    || player2.cartas[0, 1, 2, 3, 4] === "paus" 
    || player2.cartas[0, 1, 2, 3, 4] === "espadas" 
    || player2.cartas[0, 1, 2, 3, 4] === "espadas") { // nipes royal flush
        player2.resultadoDaMao = 10 //"Royal Flush"
    } else if (player2.cartas[0] < player2.cartas[1] && player2.cartas[1] < player2.cartas[2] && player2.cartas[3] < player2.cartas[4])
    { // usar for
        player2.resultadoDaMao = 9 //"straight flush"
    } else if (player2.cartas[0] === player2.cartas[1] && player2.cartas[2] === player2.cartas[3] || player2.cartas[4]) {
    player2.resultadoDaMao = 8 //"Quadra"
    } else if (player2.cartas[0] === player2.cartas[1] === player2.cartas[2] && player2.cartas[3] === player2.cartas[4] 
            || player2.cartas[0] === player2.cartas[1] && player2.cartas[2] === player2.cartas[3] === player2.cartas[4]){
        player2.resultadoDaMao = 7 //"Full House"
    } else if (player2.cartas[0] === player2.cartas[1]  === player2.cartas[2] === player2.cartas[3] === player2.cartas[4]){
        player2.resultadoDaMao = 6 //"flush"
    } else if (player2.cartas[0] < player2.cartas[1] && player2.cartas[1] < player2.cartas[2] && player2.cartas[3] < player2.cartas[4]) { // usar for
        player2.resultadoDaMao = 5 //"Sequencia"
    } else if (player2.cartas[0] === player2.cartas[1] === player2.cartas[2] && player2.cartas[3] != player2.cartas[0]){
         player2.resultadoDaMao = 4 //"Trinca"        
    } else if (player2.cartas[0] === player2.cartas[1] && player2.cartas[2] === player2.cartas[3] || player2.cartas[4]
            || player2.cartas[1] === player2.cartas[2] && player2.cartas[3] === player2.cartas[4]) {
        player2.resultadoDaMao = 3 //"dois pares" 
    } else if (player2.cartas[0] === player2.cartas[1] || player2.cartas[0] === player2.cartas[2] || player2.cartas[0] === player2.cartas[3] || player2.cartas[0] === player2.cartas[4] ||
        player2.cartas[1] === player2.cartas[2] || player2.cartas[1] === player2.cartas[3] || player2.cartas[1] === player2.cartas[4] || 
        player2.cartas[2] === player2.cartas[3] || player2.cartas[2] === player2.cartas[4] || 
        player2.cartas[3] === player2.cartas[4]){
            player2.resultadoDaMao = 2 //"um par"
        } else {player2.cartas[0] >= player2.cartas[1] || player2.cartas[1] >= player2.cartas[2] || player2.cartas[3] >= player2.cartas[4]
            player2.resultadoDaMao = 1 }// carta mais alta 

        }  
player1.cartas.forEach((carta, index) => {
    console.log(`player 1 o numero da carta é ${index + 1} é ${carta.numero} e o naipe é ${carta.naipe}`)
});
player2.cartas.forEach((carta, index) => {
    console.log(`player 2 o numero da carta é ${index + 1} é ${carta.numero} e o naipe é ${carta.naipe}`)
});

// definindo quem ganhou 
if (player1.resultaDaMao > player2.resultadoDaMao) {
    console.log("jogador 1 venceu")
} else {
    console.log("jogador 2 venceu")
}