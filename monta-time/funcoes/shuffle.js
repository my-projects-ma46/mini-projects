
function mod(x) { return (x<0 ? -x : x); }

function makeSwaps(players, pace, tolerance=3, probSwap=0.5) {
    const size = players.length;

    if(size > pace) {
        let index = pace;
        // percorre fazendo swap
        for(var i = 0; index < size; index++, i++) {
            // se não são muito diferentes, faz swap
            if(mod(players[index].overall - players[i].overall) <= tolerance) {
                // probabilidade de fazer swap
                if(Math.random() >= probSwap) {
                    // swap nos dois
                    let aux = players[index];
                    players[index] = players[i];
                    players[i] = aux;
                }
            }
        }
    }
}

function randTeam(players) {
    const firstWave = 1, secondWave = 4;

    makeSwaps(players, firstWave);
    makeSwaps(players, secondWave);

    return players;
}

module.exports = {
    randTeam
};

