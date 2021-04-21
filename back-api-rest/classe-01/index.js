const express = require("express");
// const bodyParser = require("body-parser");

const app = express()
app.use(express.json());

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

app.get("/convidados", (req, res) => {
    
    if(req.query.nome) {
        let naLista = convidados.includes(req.query.nome)
        naLista ? res.json({ mensagem: "Convidado presente" }) : res.json({ mensagem: "O convidado buscado não está presente na lista" })
    } else {
        res.json(convidados);
    }
       
});

//POST

app.post("/convidados", (req, res) => {
    
    if(convidados.includes(req.body.nome)) {
        res.json({
            mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
        });
    } else {
        
        convidados.push(req.body.nome)
        res.json(req.body)
        
    }

});


app.listen(8000);