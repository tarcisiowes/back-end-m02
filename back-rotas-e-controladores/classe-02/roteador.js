const express = require("express")

const roteador = express()

const ctrlDeAlunos = require("./controladores/recurso-a")


roteador.get("/alunos", ctrlDeAlunos.get)

roteador.get("/alunos/:numero", ctrlDeAlunos.getPorId)

module.exports = roteador