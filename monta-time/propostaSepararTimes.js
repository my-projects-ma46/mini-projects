
print = console.log;

function copiar(lista) {
    // não funciona para listas complexas
    // como por exemplo, lista de objetos, para isso, fazer outro copiar() 
    return JSON.parse( JSON.stringify( lista ) );
}

function somaLista(lista) {
    return lista.reduce((a, b) => a + b, 0);
}

function diferenca(listas) {
    // pega os tamanhos das listas, e calcula a diferença
    var arr = listas.map(somaLista);
    var min = Math.min.apply(null, arr),
        max = Math.max.apply(null, arr);
    return max-min;
}

function todosPreenchidos(listas, qtdListas, tamMax) {
    for (i=0; i<qtdListas; i++) {
        if (listas[i].length < tamMax) {
            return false;
        }
    }
    return true;
}

var vez = 0;
function colocar(numeros, qualNum, qualLista, listas, qtdListas, tamanhos, tamMax) {
    
    vez += 1;
    var novoQualNum = copiar(qualNum) + 1;
    
    var todosCheios = true;
    for (var i=0; i<qtdListas; i++) {
        if (tamanhos[i] < tamMax) {
            todosCheios = false;
        }
    }
    if (todosCheios) {
        return listas;
    }

    if (tamanhos[qualLista] == tamMax) {
        return listas;
    }

    var novaListas = copiar(listas);
    novaListas[qualLista].push(numeros[novoQualNum]);
    var novosTamanhos = copiar(tamanhos);
    novosTamanhos[qualLista] += 1;

    var opcao;
    var diffOpcao;
    var itemParaComp;
    // considerando melhor lista a da pos. 0, depois compara com o resto
    var melhorOpcao = colocar(numeros, novoQualNum, 0, novaListas, qtdListas, novosTamanhos, tamMax);
    var diffMelhorOpcao = diferenca(novaListas);
    // loop calculando as diferenças das listas com a insersão do valor
    for (i=1; i<qtdListas; i++) {
        
        opcao = colocar(numeros, novoQualNum, i, novaListas, qtdListas, novosTamanhos, tamMax);
        // print(opcao);
        diffOpcao = diferenca(opcao);
        if (todosPreenchidos(opcao, qtdListas, tamMax) && (diffOpcao < diffMelhorOpcao)) {
            melhorOpcao = opcao;
            diffMelhorOpcao = diffOpcao;
        }
    }
    return melhorOpcao;
}

function calcularTimes(pessoas, pessoasPorTime) {
    var times = [];
    var tamanhos = [];
    var qtdTimes = parseInt(pessoas.length / pessoasPorTime);
    // print(qtdTimes);
    for (i=0; i< qtdTimes; i++) {
        times.push([]);
        tamanhos.push(0);
    }
    // print(times);
    return colocar(pessoas, -1, 0, times, qtdTimes, tamanhos, pessoasPorTime);
}

function shuffle(array) {
    // função de embaralhar vetor
    // fonte: https://github.com/Daplie/knuth-shuffle
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

console.clear();

// cada valor seria o valor geral das habilidades de um jogador
var pessoas = shuffle([5,4,3,2,1,5,3,2,4]);


// exemplo de resultado esperado:
// pessoasPorTime = 3;
// pessoas = [3,1,2,6,5,7,4,8,9];

// soma de cada lista (time) = 15
// times: 
// [
//     [9,5,1],
//     [8,4,3],
//     [7,6,2]
// ]

const pessoasPorTime = 3;

var times = calcularTimes(pessoas, pessoasPorTime);
print('rodou ' + vez + ' vezes');
// print(times);
print("\nTimes:");
for (i=0; i<times.length; i++) {
    print('> ' + times[i] + '. soma = ' + somaLista(times[i]));
}
