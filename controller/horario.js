var ajustarHora = function () {
    const agora = new Date();
  
    const hora = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();
  
    let resultado = "" + hora + ":" + minutos + ":" + segundos;
  
    return resultado;
  }
  
  var ajustarDia = function () {
    const agora = new Date();
    const dia = agora.getDay(); 
    return dia;
  }
  
  var ajustarMes = function () {
    const agora = new Date();
    const mes = agora.getMonth(); 
    return mes;
  }
  
  var ajustarAno = function () {
    const agora = new Date();
    const ano = agora.getFullYear(); 
    return ano;
  }
  
  module.exports = { ajustarHora, ajustarDia, ajustarMes, ajustarAno };
  