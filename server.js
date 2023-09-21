const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Se conecta com o banco de dados

mongoose.connect('mongodb+srv://senai115:senai115@senaiprojetos.7uk6zdo.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp', {
    dbName : 'api_comentarios',
})
.then(() => console.log("Conectado ao banco de dados") )

// Criando as rotas e servidor

const express = require('express') // Import da biblioteca
const cors = require('cors') // Aceita conexões de multiplos servidores
const app = express() // Nosso servidor


//Middleware

app.use(cors())             //Cross-origin resource sharing -> aceita a origem de multiplos servidores 
app.use(express.json());    //JavaScript Object Notation -> faz com que o servidor aceite o formato json

//Aonde vai ficar as rotas

    //importando o modelo
    const comentario = require('./model/modelo')

app.get("/", async(req,res) => {

    await comentario.find()               //Procura por todos os comentarios no banco de dados
    .then((comentarioRecuperado) => {

        if(comentarioRecuperado){

            const resultado = comentarioRecuperado.map(comentarioRecuperado => comentarioRecuperado.props )

            res.header('Cache-Control', 'max-age=60, s-maxage=60, stale-while-revalidate=60') // Cria um cache na api, que guarda os dados da ultima request do banco de dados, e depois de 1 minuto ele verifica o banco novamente em busca de novos dados, enquanto isto ele manda uma ordem para o navegador de receber os dados do cache, mas de esperar a revalidação

            res.status(200).send(resultado) // Caso tenha conseguido recuperar os dados do banco de dados, mandamos um status http 200 + o resultado
        }
        else{
            res.status(404).json({"erro":"não achamo"})
        }
    })
    .catch((erro) =>{
        res.status(503).json(erro)
    })

})

app.get("/index/:index", async(req,res) => {

    await comentario.findOne({'props.index':req.params.index})               //Procura por todos os comentarios no banco de dados
    .then((comentarioRecuperado) => {

        if(comentarioRecuperado){
            res.status(200).send(comentarioRecuperado) // Caso tenha conseguido recuperar os dados do banco de dados, mandamos um status http 200 + o resultado
        }
        else{
            res.status(404).json({"erro":"não achamo"}) // Caso ele não recupere nada, volta um 404 
        }
    })
    .catch((erro) =>{
        res.status(503).json(erro) // Caso de tudo errado, no site do deploy ele volta um 503 macabro
    })

})


// Outros

app.listen(5000) // Aonde ele abre o servidor


