const { imoveis } = require("../dados/imoveis");


function get(req, res) {

    res.json(imoveis)

}

function getPorId(req, res) {    

    res.json(imoveis[req.params.numero-1])

}

module.exports = { get , getPorId}
