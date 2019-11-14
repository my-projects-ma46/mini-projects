
var { randTeam } = require('./shuffle');

function separarTimes(parametros) {
    // ordena jogadores por overall, e randomiza um pouco
    var sortedPlayers = randTeam(parametros.jogadores.sort(
        function compare(a, b) {
            return a.overall - b.overall;
        }
    ));
    
    var teams = [];
    var reserve;
    var i, subset, startSection, endSection;
    
    // inicia todos os times como vazio
    for(var i = 0; i < parametros.qtdTimes; i++) {
        teams.push([]);
    }

    for(i = 0; i < parametros.tamTimes; i++) {
        // pegar uma parte dos jogadores
        startSection = i * parametros.qtdTimes;
        endSection = startSection + parametros.qtdTimes;
        subset = sortedPlayers.slice(startSection, endSection);
        
        // reverter ordem ou não
        if((i % 2) == 0) {
            subset = subset.reverse();
        }
        // distribuir entre os times
        for(var j = 0; j < parametros.qtdTimes; j++) {
            teams[j].push(subset.shift());
        }
    }

    // pegar o restante como reserva
    reserve = sortedPlayers.slice(endSection, parametros.jogadores.length + 1);
    
    // embrulha o retorno em um objeto com os times e os reservas
    return {'teams':teams, 'reserve': reserve};
}

function calcularTimes(jogadores, pessoasPorTime) {
    const totalPessoas = jogadores.length;
    var qtdTimes = parseInt(totalPessoas / pessoasPorTime);

    // debug
    // console.log("quantos times: " + qtdTimes);
    // console.log("nro jogadores: " + totalPessoas);
    // console.log("jogadores por time: " + pessoasPorTime);

    return separarTimes({'jogadores':jogadores, 'tamTimes':pessoasPorTime, 'qtdTimes':qtdTimes});
}

module.exports = {
    calcularTimes
};
