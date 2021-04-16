const express = require("express")

const app = express()

app.get("/soma", (req, res) => {
    
    res.send(String(Number(req.query.num1)+Number(req.query.num2)));
});

app.get("/subtrair", (req, res) => {
    
    res.send(String(Number(req.query.num1)-Number(req.query.num2)));
});

app.get("/multiplicar", (req, res) => {
    
    res.send(String(Number(req.query.num1)*Number(req.query.num2)));
});

app.get("/dividir", (req, res) => {
    
    res.send(String(Number(req.query.num1)/Number(req.query.num2)));
});

app.listen(8000);