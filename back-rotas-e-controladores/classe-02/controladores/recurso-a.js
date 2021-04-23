const { alunos } = require("../dados/colecao-a");


function get(req, res) {

    res.status(200)
    res.json(alunos)
    

}

function getPorId(req, res) {    

    res.status(200)
    res.json(alunos[req.params.numero-1])

}

module.exports = { get , getPorId}
