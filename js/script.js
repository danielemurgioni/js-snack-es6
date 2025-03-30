const shop = [
    {
        name: "Bici beta",
        weight: 10 
    },
    {
        name: "Bici delta",
        weight: 20
    },
    {
        name: "Bici gamma",
        weight: 40
    },
    {
        name: "Bici yatta",
        weight: 80
    }
];

// creo una variabile dove prendo il peso del primo elemento dell'array
let minWeight = shop[0].weight;
//creo una variabile che rappresenterà il risultato che voglia ottenere (la bici con il peso minore)
let lessHeavy;

// ciclo l'array shop con FOR, quindi controllo le bici
for(let i=0; i<shop.length; i++){
    // se il peso della bici in posizione [i] è minore o uguale di minWeight allora assegno il valore a lessHeavy

    //(solo con minore non riesco a determinare il peso minore nel caso io abbia il valore minore al primo posto nell'array)[quindi mi risulterebbe "undefined"]

    if(shop[i].weight <= minWeight){
        lessHeavy = shop[i];
    }
}

console.log(lessHeavy);

/*------------------------------------------------------*/

const football = [
    {
        nome: "Squadra di Gianni",
        goals: 0,
        fouls: 0
    },
    {
        nome: "Squadra di Piero",
        goals: 0,
        fouls: 0
    },
    {
        nome: "Squadra di Vittorio",
        goals: 0,
        fouls: 0
    },
]

console.log(football);

// creo un nuovo array e pusho all'interno i nomi e falli delle squadre tramite il FOR creato poco fa

let footballFouls = []


//con un ciclo FOR vado a cambiare alcune caratteristiche delle squadre: falli e goal con dei numeri casuali con l'uso di una funzione

for(let i=0; i<football.length; i++){
    footballFouls.push(football[i].nome)
    football[i].goals = RNG(1,10)
    footballFouls.push(football[i].fouls = RNG(1,10))
}

console.log(footballFouls)

//Function RNG

function RNG(min, max){
    return Math.floor(Math.random() * (max - min) + min);
};