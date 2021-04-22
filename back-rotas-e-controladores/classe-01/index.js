const express = require("express")
const app = express()
app.use(express.json())

const ctrlDeImoveis = require("./controladores/imoveis")


app.get("/imoveis", ctrlDeImoveis.get)

app.get("/imoveis/:numero", ctrlDeImoveis.getPorId)


app.listen(8000);