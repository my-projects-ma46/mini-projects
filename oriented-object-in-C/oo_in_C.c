#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/**
 * Esse código simula a criação de uma classe e objeto em C
 * com um exemplo simples de Pessoa com nome e idade, e um método falar()
 * 
 * para compilar e rodar: gcc oo_in_C.c && ./a.out
 * 
 */

// seria como declarar uma classe
typedef struct pessoa {
  int idade;
  char nome[50];
  // ponteiro para função
  void (*falar)(struct pessoa *); 
} Pessoa;

// não dá para declarar uma função dentro da struct, então é criado aqui
// e depois salvo seu ponteiro na struct
void falar(Pessoa * p) {
    printf("Oi! Meu nome eh %s e tenho %d anos.\n",p->nome, p->idade);
}

// seria o constructor da classe, retorna um objeto Pessoa
Pessoa * newPessoa(char *nome, int idade) {
    Pessoa *p = (Pessoa *) malloc(sizeof(Pessoa));
    p->idade = idade;
    strcpy(p->nome, nome);
    p->falar = falar;
    return p;
}

int main(int argc, char const *argv[])
{
    // instanciando
    Pessoa *pedro = newPessoa("Pedro", 20);
    // é preciso passar a referência do "objeto"
    pedro->falar(pedro);

    return 0;
}

