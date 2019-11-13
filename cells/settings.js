// configurações

const LINHAS = 30;
const COLUNAS = 100;

const ESQ = 0;
const BAIXO = 1;
const CIMA = 2;
const DIR = 3;

const GRASS = ' ';
const CELULA = '@'; // identifica a célula

const VELOCIDADE = 1;

// caso não queira deixar rastro, coloque os dois de baixo como GRASS
const INDO_RASTRO = '*';
const VOLTANDO_RASTRO = '-';

const VISUALIZAR = true; // coloque false caso queira ver logo o resultado
const totalLoops = 500; // total de loops
const delay = 25; // velocidade da simulação
const TAMANHO_RASTRO = 100; // tamanho do rastro que vai deixar
const LIMPAR_HIST = false; // ir limpando o rastro
const BACK_AND_FORTH = true; // comportamento de ir e voltar da célula


module.exports = {
    LINHAS, COLUNAS,
    ESQ, BAIXO, CIMA, DIR,
    GRASS, CELULA,
    VELOCIDADE,
    INDO_RASTRO, VOLTANDO_RASTRO,
    VISUALIZAR, totalLoops, delay, TAMANHO_RASTRO, LIMPAR_HIST, BACK_AND_FORTH
};

