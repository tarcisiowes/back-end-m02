if(!alunos) {
    res.status(404)
    res.json({ erro: `O aluno informado nao existe`})
    return;
}