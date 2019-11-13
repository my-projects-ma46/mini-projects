
function separarTimes(parametros) {

    var sortedPlayers = parametros.jogadores.sort(
        function compare(a, b) {
            return a.habilidade - b.habilidade;
        }
    );

    var teams = [];
    var tempTeam = [];
    
    while(sortedPlayers.length > 0) {
        tempTeam.push(sortedPlayers.pop());
        // quando completar um time, inserir na lista de times
        if(tempTeam.length == parametros.tamMax) {
            if((sortedPlayers.length % 2) == 0) {
                tempTeam = tempTeam.reverse();
            }
            teams.push(tempTeam);
            tempTeam = [];
        }
    }

    // embrulha o retorno em um retorno com os times e reservas
    return {'teams':teams, 'reserve': tempTeam};
}

module.exports = {
    separarTimes: separarTimes
};
