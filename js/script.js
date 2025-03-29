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

// Stampa la bici con il peso minore: 
// ciclo l'array shop con FOR e vado a prendere il peso degli oggetti Bici
for(let i=0; i<shop.length; i++){
    console.log(shop[i].weight);
}

console.log(shop)