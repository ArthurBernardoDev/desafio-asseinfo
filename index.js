function validaCartas(player1) {
    let carta1 = player1.cartas[0]
    let carta2 = player1.cartas[1]
    let carta3 = player1.cartas[2]
    let carta4 = player1.cartas[3]
    let carta5 = player1.cartas[4]

}



const player1 = {
    cartas: [
        {numero: 5, naipe: "copas"}, {numero: 5, naipe: "paus"}, {numero: 6, naipe: "espadas"},
        {numero: 7, naipe: "espadas"}, {numero:"rei", naipe: "ouros"}
    ]

}
console.log("Primeira carta do Player 1:", player1.cartas[0])
console.log("Segunda carta do Player 1:", player1.cartas[1])
console.log("Terceira carta do Player 1:", player1.cartas[2])
console.log("Quarta carta do Player 1:", player1.cartas[3])
console.log("Quinta carta do Player 1:", player1.cartas[4])

const player2 = {
    cartas: [
        {numero: 2, naipe: "paus"}, {numero: 3, naipe: "espadas"}, {numero: 8, naipe: "espadas"},
        {numero: 8, naipe: "ouros"}, {numero:"dama", naipe: "ouros"}
    ]
}
console.log("Primeira carta do Player 2:", player2.cartas[0])
console.log("Segunda carta do Player 2:", player2.cartas[1])
console.log("Terceira carta do Player 2:", player2.cartas[2])
console.log("Quarta carta do Player 2:", player2.cartas[3])
console.log("Quinta carta do Player 2:", player2.cartas[4])
