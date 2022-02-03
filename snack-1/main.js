
const bicicletta = [

    {
        nome : "bici rossa",
        peso : 50,
    },
    {
        nome : "bici blu",
        peso : 40,
    },
    {
        nome : "bici verde",
        peso : 60,
    },

];

// mi ricavo la somma dei pesi

function pesoMinore (MTB) {

    minore = 0;

    for(let i=0; i < MTB.length; i++) {
        minore += MTB[i].peso;
    }
    return minore;

}

peso = pesoMinore (bicicletta);
console.log("la bici più leggere è:" + peso)