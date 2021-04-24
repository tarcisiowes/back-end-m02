
const express = require("express");

const app = express()

let segundos = 0
let minutos = 0
let comecou = false
let iniciado = false

function start() {

    comecou = true
    if (!iniciado) {

        setInterval(() => {

            if (comecou) {

                if (segundos == 59) {
                    segundos = 0
                    minutos++
                } else {
                    segundos++
                }
            }

        }, 1000)

        iniciado = true
    }

}

app.get("/", (req, res) => {
    res.send(`Tempo atual do cronômetro: ${minutos.toString().padStart(2, "0")} minutos e ${segundos.toString().padStart(2, "0")} segundos`)
});

app.get("/iniciar", (req, res) => {
    start();
    res.send("Cronômetro iniciado!")
});

app.get("/pausar", (req, res) => {
    comecou = false;
    res.send("Cronômetro pausado!");
});

app.get("/continuar", (req, res) => {
    comecou = true;
    res.send("Cronômetro continuando!")
});

app.get("/zerar", (req, res) => {
    minutos = 0;
    segundos = 0;
    res.send("Cronômetro zerado!")
});

app.listen(8000)


