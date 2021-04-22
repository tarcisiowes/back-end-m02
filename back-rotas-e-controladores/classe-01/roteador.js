const express = require("express")

const roteador = express()

const ctrlDeImoveis = require("./controladores/imoveis")


roteador.get("/imoveis", ctrlDeImoveis.get)

roteador.get("/imoveis/:numero", ctrlDeImoveis.getPorId)

module.exports = roteador