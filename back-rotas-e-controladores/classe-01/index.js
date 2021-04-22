const express = require("express")

const app = express()

const { imoveis } = require("./dados/imoveis");


app.get("/imoveis", (req, res) => {

    res.json(imoveis)
})

app.get("/imoveis/:numero", (req, res) => {
    

    res.json(imoveis[req.params.numero-1])
})


app.listen(8000);