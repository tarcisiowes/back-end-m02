
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

app.get("/adicionar", (req, res) => {

    // add  
    if (!Number(req.query.indice)) {
        jogadores.push(req.query.nome)
        res.send(jogadores);
        return
    } else if(Number(req.query.indice) < 0 || Number(req.query.indice) === jogadores.length+1) {

        res.send(`O índice informado (${req.query.indice}) não existe no array. Novo jogador não adicionado.`);
        return

    } else {

        jogadores.splice(Number(req.query.indice), 0, req.query.nome)
        res.send(jogadores);
        
    }
     
});

app.listen(8000);