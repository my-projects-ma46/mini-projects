
const LINHAS = 30;
const COLUNAS = 120;

const CIMA = 0;
const BAIXO = 1;
const ESQ = 2;
const DIR = 3;

const GRASS = ' ';
const PONTO = '@';

const VELOCIDADE = 1;

var rastro = '*';

print = console.log;
var x=1, y=1;
var parar = 1, dir=0;
var campo = [];
// var log = 's';

// imprime o campo no terminal
function imprimeCampo() {
    // system("clear");

    for(var i = 0; i < LINHAS; i++) {
        for(var j = 0; j < COLUNAS; j++) {
            process.stdout.write(campo[i][j]);
        }
        print("|");
    }
    for(var j = 0; j < COLUNAS; j++) {
        process.stdout.write("-");
    }
    print("");
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

function setCell(valor) {
    try {
        // print(campo);
        campo[y][x] = valor;
    }
    catch(err) {
        // print('deu erro: ' + campo[x][y]);
        print('ponto: ' + valor);
        print('x: ' + x + '  y: ' + y);
        // print(err);
        // throw "bola";
    }
}

function main() {

    iniciaCampo();
    const totalLoops = 1500;
    const delay = 25;
    var loop = 0;

    // log = log + campo[x-1][y];
    // if(campo[x-1][y] == '*') {
    //     return -1;
    //     if((x + VELOCIDADE + 2) < COLUNAS) {
    //         x += (VELOCIDADE + 2);
    //     }
    // }
    while(loop < totalLoops) {
        console.clear();
        // pega numero aleatório de 0 a 3
        // vai indicar em qual direção mover
        

        if (loop < 1000) {
            dir = Math.floor(Math.random() * 5);
        }
        else {
            rastro = '.';
            dir = Math.floor(Math.random() * 3);
        }
        // limpa o lugar que o ponto está
        // campo[x][y] = GRASS;
        // campo[x][y] = '*';
        setCell(rastro);
        
        // move o ponto em alguma direção, caso a direção que vai mover
        // não seja o limite do campo
        switch(dir) {
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
            case ESQ:
                if((x - VELOCIDADE) >= 0) {
                    x -= VELOCIDADE;
                }
                break;
            case DIR:
                if((x + VELOCIDADE) < COLUNAS) {
                    x += VELOCIDADE;
                }
                break;
            case 4:
                if((x + VELOCIDADE) < COLUNAS) {
                    x += VELOCIDADE;
                }
                break;
            default:
                print("valor deconhecido: " + dir);
                break;
        }

        // marca o lugar que o ponto está no campo
        
        setCell(PONTO);
        // print("[%d][%d] dir: %d\n",x,y,dir);
        // imprimeCampo();
        // sleep(delay);
        loop += 1;

    }
    imprimeCampo();

    return 0;
}

var a = main();
// print(campo.length);
// print(campo[0].length);

// print('>>>' + log + '<<<');
