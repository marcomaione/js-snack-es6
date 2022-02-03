// squadre di calcio

const squadre = [
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0,
    },
];

// inserisco un valore random per punti fatti e falli subiti

for (let key in squadre) {
    squadre[key].puntiFatti = Math.floor(Math.random() * 50 + 1);
    squadre[key].falliSubiti = Math.floor(Math.random() * 30 + 1);

    
}

// uso la destrutturazione e creo nuovo arrey con punti e falli subiti

const puntiFalli = [];

for(let key in squadre) {
    let {puntiFatti, falliSubiti} = squadre[key];
    puntiFalli.push({
        puntiFatti: puntiFatti, falliSubiti: falliSubiti
    })
}

 /*console.log( squadre.nome + puntiFalli);*/

// non riesco a cambiare il numero dell'arrey con il nome della squadra

console.log(puntiFalli);