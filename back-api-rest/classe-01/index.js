const express = require("express");

const app = express()

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

app.get("/convidados", (req, res) => {
    
    if(req.query.nome) {
        let naLista = convidados.includes(req.query.nome)
        naLista ? res.json("mensagem: Convidado presente.") : res.json("mensagem: O convidado buscado não está presente na lista.")
    } else {
        res.json(convidados);
    }
       
});

app.listen(8000);