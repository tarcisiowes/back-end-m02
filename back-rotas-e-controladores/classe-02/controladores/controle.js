const { alunos } = require("../dados/lista");


function get(req, res) {

    res.status(200)
    res.json(alunos)
    

}

function getPorId(req, res) {    

    res.status(200)
    res.json(alunos[req.params.numero-1])

}

let proximoId = 2
function post(req, res) {
        
    const novoAluno = {
        id: proximoId,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: req.body.idade,
        curso: req.body.curso,
    }

    alunos.push(novoAluno)

    proximoId++

    res.json(novoAluno)
}

module.exports = { get , getPorId , post}
