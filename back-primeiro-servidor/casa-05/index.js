
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

app.get("/remover", (req, res) => {

    // let remover = ;   
    if(Number(req.query.indice) < 0 || Number(req.query.indice) === jogadores.length) {
        res.send(`Não existe jogador no índice informado (${req.query.indice}) para ser removido.`);
    } else {
        res.send(jogadores.splice(Number(req.query.indice),1));
    }
});

app.listen(8000);