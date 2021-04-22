const express = require("express")

const app = express()

const imoveis = [
    {
      id: 1,
      logradouro: "Av. Getúlio Vargas",
      numero: 1458,
      complemento: "Térreo",
      bairro: "Funcionários",
      cidade: "Belo Horizonte",
      cep: "30112-021"
    },
    {
      id: 2,
      logradouro: "Av. Paulista",
      numero: 1009,
      complemento: "16º andar",
      bairro: "Cerqueira César",
      cidade: "São Paulo",
      cep: "01310-100"
    }
  ];


app.get("/imoveis", (req, res) => {

    res.json(imoveis)
})

app.get("/imoveis/:numero", (req, res) => {
    

    res.json(imoveis[req.params.numero-1])
})

app.listen(8000);