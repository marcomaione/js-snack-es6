
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

    let {peso, nome} = MTB[0];

    for ( let i =0; i < MTB.length; i ++) {

        if (peso > MTB[i].peso) {

            peso = MTB[i].peso;
            nome = MTB[i].nome;

        }
    }

    let risultato = `il prodotto che pesa meno è ${nome} che pesa ${peso} kg`;
    return risultato;

}

let pesoFinale = pesoMinore(bicicletta);
console.log(pesoFinale);
