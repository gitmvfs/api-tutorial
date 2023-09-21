const { default: axios } = require("axios");

async function teste(){
    await axios.get('http://localhost:5000/')
    .then((resposta) => {console.log(resposta.data)})
}

teste()

