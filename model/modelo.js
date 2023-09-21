const mongoose = require('mongoose'); 
const {ajustarHora, ajustarMes , ajustarDia , ajustarAno} = require('../controller/horario')

//Declarando o schema
var Comentario = new mongoose.Schema({
    
    props:{
        index:{
            type:Number,
            unique: true,
            index: true,
        },
        link_imagem:{
            type:String,
            required: true,

        },
        nome:{
            type:String,
            required:true,
        },
        comentario:{
            type: String,
            required: true,
            maxlength:500
        },
        data_comentario:{
            type: Object,
            default:{
               horario: ajustarHora(),
               dia : ajustarDia(),
               mes : ajustarMes(),
               ano : ajustarAno()
            }
        },
        nota:{
            type:String,
            enum: {
                values: ['1', '2','3','4','5'],
                message: '{VALUE} não é uma nota valida.'
              }
        }
    }
});

//Export the model
module.exports = mongoose.model('Comentario', Comentario);
