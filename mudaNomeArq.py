import os

'''
Para rodar o programa: 
    $ python3 mudaNomeArq.py

coloque na mesma pasta dos arquivos, pode por em outra pasta,
basta alterar a variável `caminho`

Objetivo do programa:
Alterar os nomes grandes de 
arquivos para nomes pequenos, e depois poder alterar para
os nomes originais

autor: Marcelo Araújo dos Santos
github: https://github.com/santosm46
'''

# caminho dos arquivos
caminho = ''
# nome da atividade
atividade = 'aula3exer1'
#nome do aluno
aluno = '_AnaBraga_12-1223222'

# constantes, serve para pegar valor de tuplas
NOME = 0
TIPO = 1
ORIGINAL = 0
MODIFICADO = 1

# nome curto relacionado aos nomes longos, junto com o tipo

nomesArq = {
    'apg':('Apaga','sql'),
    'con':('Consulta','sql'),
    'ctr':('Controle','sql'),
    'fis':('Fisico','sql'),
    'pop':('Popula','sql'),
    'conceitual':('Conceitual','brM3'),
    'logico':('Logico','brM3'),
    'doc':('DOC','pdf')
}

def loopPrograma(relacoesArq):
    while(True):
        print('''    Escolha uma opção:
        1) simplificar nome dos arquivos
        2) voltar nome dos arquivos ao original

        0) sair\n
        ''')
        opcao = input("Opcao: ")

        if(opcao == "1"):
            simplificar(relacoesArq)
        elif(opcao == "2"):
            voltaParaOriginal(relacoesArq)
        elif(opcao == "0"):
            break
        print("\n")

# pega o nome longo e monta o nome, juntando o caminho, nome da atividade
# nome do arquivo, aluno e tipo do arquivo
def montaNomeArq(nomeArq):
    return caminho+atividade+nomeArq[NOME]+aluno+'.'+nomeArq[TIPO]

# pega nome simples do arquivo e junta com o tipo
def montaNovoNome(nome, val):
    return caminho+nome+'.'+val[TIPO]

def nomeCurto(nome):
    limite = 15
    return nome[:limite]+('...' if (len(nome)>limite) else '')

def renomearArq(antigo, novo):
    try:
        os.rename(antigo, novo)
    except: # erro causado geralmente por arquivo não existir
        print("Não foi possível renomear ["+nomeCurto(antigo)+"] para ["+nomeCurto(novo)+"]")

# simplifica o nome dos arquivos
def simplificar(relacoesArq):
    for nomeArq in relacoesArq:
        renomearArq(nomeArq[ORIGINAL], nomeArq[MODIFICADO])

# muda o nome dos arquivos para o original
def voltaParaOriginal(relacoesArq):
    for nomeArq in relacoesArq:
        renomearArq(nomeArq[MODIFICADO], nomeArq[ORIGINAL])


if __name__ == '__main__': 
    os.system("clear")
    relacoesArq = []

    for key,val in nomesArq.items():
        relacoesArq.append( (montaNomeArq(val), montaNovoNome(key, val)) )
    
    loopPrograma(relacoesArq)
