// const fs = require("fs")

// fs.readFile("texto.txt",(err, data) => {
//     if (err) {
//         console.log("Erro: ", err)
//     } else {
//         console.log("Leu com sucesso")
//         fs.writeFile("novoTexto1.txt", data, (err) => {
//             if(err) {
//                 console.log("Erro na escrita : ", err)
//             } else {
//                 console.log("Escreveu 1 com sucesso")
//             }
            
//         })
//         fs.writeFile("novoTexto2.txt", data, (err) => {
//             if(err) {
//                 console.log("Erro na escrita : ", err)
//             } else {
//                 console.log("Escreveu 2 com sucesso")
//             }
            
//         })
        
//     }
// })

// //=========================== read

// fs.readFile("novoTexto1.txt",(err, data) => {
//     if (err) {
//         console.log("Erro: ", err)
//     } else {
//         console.log("Leu com sucesso: ", data.toString())
//     }
// })
// fs.readFile("novoTexto2.txt",(err, data) => {
//     if (err) {
//         console.log("Erro: ", err)
//     } else {
//         console.log("Leu com sucesso: ", data.toString())
//     }
// })

// console.log("fim")

//=============================== PROMISE

// const fs = require("fs/promises")
//

// const leituraDoArquivo = fs
//     .readFile("texto.txt")
//     .then((data) => {
//         console.log("Terminei de ler: ", data.toString())
//     })
//     .catch((err) => {
//         console.log("Erro: ", err)
//     })
// leituraDoArquivo.then(() => console.log("terminou"))

// console.log(leituraDoArquivo)

//fs.readFile > leitura pendente
// .then > entao apos encontrar escreva um novoFile
//          podemos add mais de um .then outra ação mostre na tela 
//.catch > caso encontre erros

// fs.readFile("texto.txt") 
//     .then((data) => fs.writeFile("novoTexto3.txt", data)) 
//     .then(() => {
//         console.log("Escrita completa")  
//     })
//     .catch((err) => { // caso encontre erros
//         console.log("Erro: ", err)
//     })



//======================================
//express servidor
// axios client baseado em promise


// const axios = require("axios")

// const cepPromise = axios.get("https://viacep.com.br/ws/32040270/json/")

// cepPromise.then((resp) => {
//     console.log(resp.data)
// })

// console.log(cepPromise)

//=========================================== axios mult request

// const axios = require("axios")

// function obterLogradouro(cep) {

//     const respPromise = axios.get(`https://viacep.com.br/ws/${cep}/json/`)
//     const logradouroPromise = respPromise.then(
//         (resp) => resp.data.logradouro
//     )
//     return logradouroPromise
// }

// obterLogradouro("40140650").then((logradouro) => console.log(logradouro))
// obterLogradouro("32040270").then((logradouro) => console.log(logradouro))

//====================== forma resumida função async (faz o meso que a de cima)
// await = serve pra esperar promise

// const axios = require("axios")

// async function obterLogradouro2(cep) {
//     const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
//     return response.data.logradouro
// }

// async function exibirLogradouros(ceps) {
//     for (const cep of ceps) {
//         console.log(cep, "=>", await obterLogradouro2(cep))
//     }
// }

// exibirLogradouros(["40140650","32040270"])

//===========================  NAO USE for each/map nao se comporta bem com promise, for of é o ideal 

//==================== PROMISE.ALL é uma promessa que se resolve qndo todas outras se resolverem Promise.all(lista) ele inicia todas promessas juntas, isso pode sobrecarregar alguma parte client ou servidor, entao nao é a mais indicada

// const axios = require("axios")

// async function obterLogradouro(cep) {
//     const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
//     return response.data.logradouro
// }

// async function exibirLogradouros4(ceps) {
//     await Promise.all(
//         ceps.map(async (cep) => {
//             console.log(cep, "=>", await obterLogradouro(cep))
//         })
//     )
// }

// exibirLogradouros4(["40140650","32040270","40140650","32040270"]).then(() => console.log("FIM"))

//=================================================

// const express = require("express")
// const axios = require("axios")

// const app = express()

// app.get("/descrever/:pacote", (req, res) => {

//     const pacote = req.params.pacote

//     const promise = axios.get(`https://registry.npmjs.com/${pacote}`)

//     promise.then((response) =>{
//         res.json({
//             descrição: response.data.description, // pegando informação do parametro e retornando na resposta
//         })
//     })

// })

// app.listen(8080)

//=================================== exemplo acim no modo async


const express = require("express")
const axios = require("axios")

const app = express()

app.get("/descrever/:pacote", async (req, res) => {

    const pacote = req.params.pacote

    const response = await axios.get(`https://registry.npmjs.com/${pacote}`)
    
    res.json({
        descrição: response.data.description, // pegando informação do parametro e retornando na resposta
    })    

})

app.listen(8080)