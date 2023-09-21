const mongoose = require('mongoose');
const Comentario = require('./model/modelo')

mongoose.connect("mongodb+srv://senai115:senai115@senaiprojetos.7uk6zdo.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp", {
    dbName: 'api_comentarios',

});

const novoComentario = new Comentario({

    props:{
        index: 5,
        link_imagem:'https://static.todamateria.com.br/upload/15/83/1583748930ic5e661742ed9ab-og.jpg',
        nome:'Marcos',
        comentario:'4 kekw',
        nota:'4',
    }
})

novoComentario.save()
  .then((comentarioSalvo) => {
    console.log('Comentario salvo com sucesso:', comentarioSalvo);
  })
  .catch((erro) => {
    console.error('Erro ao salvar o comentario:', erro);
  })


