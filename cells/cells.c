#include <stdio.h>
#include <stdlib.h> 
#include <time.h> 

#define LINHAS 10
#define COLUNAS 10

#define CIMA 0
#define BAIXO 1
#define ESQ 2
#define DIR 3

#define GRASS ' '
#define PONTO '@'

#define VELOCIDADE 1

int x=5, y=5;
int parar = 1, dir=0;
int campo[LINHAS][COLUNAS];

// imprime o campo no terminal
void imprimeCampo() {
    // system("clear");
    int i ,j;
    for(i = 0; i < LINHAS; i++) {
        for(int j = 0; j < COLUNAS; j++) {
            printf("%c", campo[i][j]);
        }
        printf("|\n");
    }
    for(j = 0; j < COLUNAS; j++) {
        printf("-");
    }
    printf("\n");
}

// inicia o campo todo com grama
void limpaCampo() {
    int i ,j;
    for(i = 0; i < LINHAS; i++) {
        for(int j = 0; j < COLUNAS; j++) {
            campo[i][j] = GRASS;
        }
    }
}


int main() {

    limpaCampo();
    const int totalLoops = 15;
    int loop = 0;

    // vai rodar 10 vezes
    while(loop < totalLoops) {
        // system("clear");
        // pega numero aleatório de 0 a 3
        // vai indicar em qual direção mover
        srand(time(0));
        dir = rand() % 4;

        // limpa o lugar que o ponto está
        campo[x][y] = GRASS;

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
            default:
                printf("valor deconhecido: %c", dir);
                break;
        }

        // marca o lugar que o ponto está no campo
        campo[x][y] = PONTO;
        printf("[%d][%d] dir: %d\n",x,y,dir);
        imprimeCampo();

        loop += 1;

    }

    return 0;
}
