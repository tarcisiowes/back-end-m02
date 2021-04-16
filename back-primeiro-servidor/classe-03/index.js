  
const express = require("express")

const app = express()

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let i = 0;

app.get("/rodada", (req, res) => {
    if (i === jogadores.length) {
        i = 0
    }
    res.send(`É a vez de ${jogadores[i]} jogar!`);
    i++ 

});

app.listen(8001);
