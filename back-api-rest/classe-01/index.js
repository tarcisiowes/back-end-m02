const express = require("express");

const app = express()

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

app.get("/convidados", (req, res) => {
    res.json(convidados);
});

app.get("/convidados/:nome", (req,res) => {

    let naLista = convidados.includes(req.params.nome)
    naLista ? res.json("mensagem: Convidado presente.") : res.json("mensagem: O convidado buscado não está presente na lista.")
    // res.json(naLista);
});

app.listen(8000);