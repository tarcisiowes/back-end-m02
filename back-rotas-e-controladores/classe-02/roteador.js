const express = require("express")

const roteador = express()

const ctrlDeAlunos = require("./controladores/controle")


roteador.get("/alunos", ctrlDeAlunos.get)

roteador.get("/alunos/:numero", ctrlDeAlunos.getPorId)

roteador.post("/alunos", ctrlDeAlunos.post)

module.exports = roteador