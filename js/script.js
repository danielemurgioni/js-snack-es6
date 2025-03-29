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