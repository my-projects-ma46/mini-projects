
var { separarTimes } = require('./separarTimes');

function calcularTimes(jogadores, pessoasPorTime) {
    const totalPessoas = jogadores.length;
    var qtdTimes = parseInt(totalPessoas / pessoasPorTime);

    // debug
    console.log("quantos times: " + qtdTimes);
    console.log("nro jogadores: " + totalPessoas);
    console.log("jogadores por time: " + pessoasPorTime);

    return separarTimes({'jogadores':jogadores, 'tamMax':pessoasPorTime});
}

module.exports = {
    calcularTimes: calcularTimes
};
