const jogador2= {
    cartas: [
        {numero: 8, naipe: "copas"}, {numero: 5, naipe: "paus"}, {numero: 6, naipe: "espadas"},
        {numero: 7, naipe: "espadas"}, {numero: 13, naipe: "ouros"}
    ],
    resultaMao: 0

}

const jogador1 = {
    cartas: [
        {numero: 2, naipe: "paus"}, {numero: 3, naipe: "espadas"}, {numero: 8, naipe: "espadas"},
        {numero: 8, naipe: "ouros"}, {numero: 12, naipe: "ouros"}
    ],
    resultaMao: 0
}

function validaCartas(jogador) {
 
    if (jogador.cartas[0].numero === 10 && jogador.cartas[1].numero === 12 && 
        jogador.cartas[2].numero === 13 && jogador.cartas[3].numero === 1 &&
        jogador.cartas[0].naipe === "ouros" && jogador.cartas[1].naipe === "ouros" && 
        jogador.cartas[2].naipe === "ouros" && jogador.cartas[3].naipe === "ouros" &&
        jogador.cartas[4].naipe === "ouros" ||
        jogador.cartas[0].naipe === "paus" && jogador.cartas[1].naipe === "paus" && 
        jogador.cartas[2].naipe === "paus" && jogador.cartas[3].naipe === "paus" &&
        jogador.cartas[4].naipe === "paus" || 
        jogador.cartas[0].naipe === "espadas" && jogador.cartas[1].naipe === "espadas" && 
        jogador.cartas[2].naipe === "espadas" && jogador.cartas[3].naipe === "espadas" &&
        jogador.cartas[4].naipe === "espadas" || 
        jogador.cartas[0].naipe === "copas" && jogador.cartas[1].naipe === "copas" && 
        jogador.cartas[2].naipe === "copas" && jogador.cartas[3].naipe === "copas" &&
        jogador.cartas[4].naipe === "copas"){
            console.log("royal flush")

            jogador.resultaMao = 10 // royal flush

        } else if (jogador.cartas[0].numero > jogador.cartas[1].numero >
            jogador.cartas[2].numero > jogador.cartas[3].numero > jogador.cartas[4].numero &&
            jogador.cartas[0].naipe === "ouros" && jogador.cartas[1].naipe === "ouros" && 
            jogador.cartas[2].naipe === "ouros" && jogador.cartas[3].naipe === "ouros" &&
            jogador.cartas[4].naipe === "ouros" ||
            jogador.cartas[0].naipe === "paus" && jogador.cartas[1].naipe === "paus" && 
            jogador.cartas[2].naipe === "paus" && jogador.cartas[3].naipe === "paus" &&
            jogador.cartas[4].naipe === "paus" || 
            jogador.cartas[0].naipe === "espadas" && jogador.cartas[1].naipe === "espadas" && 
            jogador.cartas[2].naipe === "espadas" && jogador.cartas[3].naipe === "espadas" &&
            jogador.cartas[4].naipe === "espadas" || 
            jogador.cartas[0].naipe === "copas" && jogador.cartas[1].naipe === "copas" && 
            jogador.cartas[2].naipe === "copas" && jogador.cartas[3].naipe === "copas" &&
            jogador.cartas[4].naipe === "copas"){

                console.log("straught flush")
            jogador.resultadoMao = 9 // straught flush

        } else if (jogador.cartas[0].numero === jogador.cartas[1] &&
            jogador.cartas[1].numero === jogador.numero[2].numero && 
            jogador.cartas[2].numero === jogador.numero[3] ||
            jogador.cartas[1].numero === jogador.cartas[2].numero &&
            jogador.cartas[2].numero === jogador.cartas[3].numero &&
            jogador.cartas[3].numero === jogador.cartas[4].numero) {
                console.log("quadra")
                jogador.resultaMao = 8 // quadra
            
        } else if (jogador.cartas[0].numero === jogador.cartas[1].numero === jogador.cartas[2] &&
            jogador.cartas[3].numero === jogador.cartas[4].numero) {
                console.log("full house")
                jogador.resultaMao = 7 // full house    

        } else if (jogador.cartas[0].naipe === "ouros" && jogador.cartas[1].naipe === "ouros" && 
        jogador.cartas[2].naipe === "ouros" && jogador.cartas[3].naipe === "ouros" &&
        jogador.cartas[4].naipe === "ouros" ||
        jogador.cartas[0].naipe === "paus" && jogador.cartas[1].naipe === "paus" && 
        jogador.cartas[2].naipe === "paus" && jogador.cartas[3].naipe === "paus" &&
        jogador.cartas[4].naipe === "paus" || 
        jogador.cartas[0].naipe === "espadas" && jogador.cartas[1].naipe === "espadas" && 
        jogador.cartas[2].naipe === "espadas" && jogador.cartas[3].naipe === "espadas" &&
        jogador.cartas[4].naipe === "espadas" || 
        jogador.cartas[0].naipe === "copas" && jogador.cartas[1].naipe === "copas" && 
        jogador.cartas[2].naipe === "copas" && jogador.cartas[3].naipe === "copas" &&
        jogador.cartas[4].naipe === "copas"){
            console.log("flush")
                    jogador.resultaMao = 6 // flush

        } else if (jogador.cartas[0].numero > jogador.cartas[1].numero >
                jogador.cartas[2].numero > jogador.cartas[3].numero > jogador.cartas[4].numero) {
                    console.log("sequencia")
                    jogador.resultaMao = 5 //straight

        } else if (jogador.cartas[0].numero === jogador.cartas[1].numero && 
                jogador.cartas[1].numero === jogador.cartas[2].numero &&
                jogador.cartas[3].numero != jogador.cartas[4] || 
                jogador.cartas[0].numero != jogador.cartas[1].numero &&
                jogador.cartas[2].numero === jogador.cartas[3].numero &&
                jogador.cartas[3].numero === jogador.cartas[4].numero){
                    console.log("trinca")
                    jogador.resultaMao = 4 // trinca
        
        } else if (jogador.cartas[0].numero === jogador.cartas[1].numero &&
                jogador.cartas[2].numero === jogador.cartas[3].numero && jogador.cartas[4].numero ||
                jogador.cartas[0].numero != jogador.cartas[1].numero === jogador.cartas[2].numero &&
                jogador.cartas[3].numero === jogador.cartas[4].numero) {
                    console.log("2 pares")
                    jogador.resultaMao = 3 // dois pares

        } else if (jogador.cartas[0].numero === jogador.cartas[1].numero || 
                jogador.cartas[0].numero === jogador.cartas[2].numero || 
                jogador.cartas[0].numero === jogador.cartas[3].numero || 
                jogador.cartas[0].numero === jogador.cartas[4].numero ||
                jogador.cartas[1].numero === jogador.cartas[2].numero || 
                jogador.cartas[1].numero === jogador.cartas[3].numero || 
                jogador.cartas[1].numero === jogador.cartas[4].numero || 
                jogador.cartas[2].numero === jogador.cartas[3].numero || 
                jogador.cartas[2].numero === jogador.cartas[4].numero || 
                jogador.cartas[3].numero === jogador.cartas[4].numero ){ 
                    console.log("par")
                    jogador.resultaMao = 2 // par

                } else { jogador.resultaMao = 1}

                   
            }
validaCartas(jogador1)
validaCartas(jogador2)

    if (jogador1.resultaMao > jogador2.resultaMao) {
        console.log("jogador 1 venceu")
    } else {
        console.log("jogador 2 venceu")
    }

    