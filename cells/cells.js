
const {
    LINHAS, COLUNAS,
    ESQ, BAIXO, CIMA, DIR,
    GRASS, CELULA,
    VELOCIDADE,
    INDO_RASTRO, VOLTANDO_RASTRO,
    VISUALIZAR, totalLoops, delay, TAMANHO_RASTRO, LIMPAR_HIST, BACK_AND_FORTH
} = require('./settings.js');

var rastro = INDO_RASTRO;

var x=Math.floor(COLUNAS/2), y=Math.floor(LINHAS/2);
// var x=1, y=1; // se for descomentar essa linha, comente a de cima

var direcao=0;
var campo = [];
// var log = 's';

var historico = [];

// imprime o campo no terminal
function imprimeCampo() {
    console.clear();

    for(var i = 0; i < LINHAS; i++) {
        for(var j = 0; j < COLUNAS; j++) {
            process.stdout.write(campo[i][j]);
        }
        console.log("|");
    }
    for(var j = 0; j < COLUNAS; j++) {
        process.stdout.write("-");
    }
    console.log("");
}

function novaLinha() {
    let novaLinha = [];
    for(var j = 0; j < COLUNAS; j++) {
        novaLinha.push(GRASS);
    }
    return novaLinha;
}

// inicia o campo
function iniciaCampo() {
    for(var i = 0; i < LINHAS; i++) {
        campo.push(novaLinha());
    }
}

/**
* Delay for a number of milliseconds
* não é recomendado ser usado pois bloqueia execução de páginas web, por exemplo
*/
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function setCell(valor, posX, posY) {
    campo[posY][posX] = valor;
}

function main() {
    var podeRemover = false;
    var loop = 0;
    var minimo, maximo;

    if(BACK_AND_FORTH) {
        var maximo = 3;
        var minimo = 1;
    } else {
        var maximo = 4;
        var minimo = 0;
    }
    
    iniciaCampo();
    
    while(loop <= totalLoops) {
        
        // calcular comportamento (ir ou voltar)
        if(BACK_AND_FORTH) {
            if (x == COLUNAS-1) {
                rastro = VOLTANDO_RASTRO;
                // exclui movimento de ir
                minimo = 0;
            }
            else if(x == 0) {
                rastro = INDO_RASTRO;
                // exclui movimento de voltar
                minimo = 1;
            }
        }
        
        // escolhe um valor aleatório que vai indicar em qual direção mover
        direcao = Math.floor(minimo + Math.random() * maximo);
        
        setCell(rastro, x, y);
        
        // move o ponto em alguma direção, caso a direção que vai mover
        // não seja o limite do campo
        switch(direcao) {
            case ESQ:
                if((x - VELOCIDADE) >= 0) {
                    x -= VELOCIDADE;
                }
                break;
            case CIMA:
                if((y - VELOCIDADE) >= 0) {
                    y -= VELOCIDADE;
                }
                break;
            case BAIXO:
                if((y + VELOCIDADE) < LINHAS) {
                    y += VELOCIDADE;
                }
                break;
            case direcao:
                if((x + VELOCIDADE) < COLUNAS) {
                    x += VELOCIDADE;
                }
                break;
            default:
                console.log("valor deconhecido: " + direcao);
                break;
        }

        // marca o lugar que o ponto está no campo
        
        setCell(CELULA, x, y);
        historico.push({'x':x, 'y':y});
        if(podeRemover && LIMPAR_HIST) {
            var posAntiga = historico.shift();
            setCell(GRASS, posAntiga.x, posAntiga.y);
        }
        else {
            podeRemover = loop > TAMANHO_RASTRO;
        }
        
        if(VISUALIZAR) {
            imprimeCampo();
            console.log('loop ' + loop + '/' + totalLoops);
            sleep(delay);
        }
        loop += 1;

    }
    imprimeCampo();

    return 0;
}

var a = main();
