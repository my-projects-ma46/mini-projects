
nomeArq = 'pessoas.txt'
# pessoasPorGrupo = 4

try:
    lidos = open(nomeArq,'r')
except:
    print('arquivo '+nomeArq+'não existe!')
    exit(0)

saida = open('separados.txt','w')

pessoas = lidos.readlines()
pessoas.sort()

aux = 0
grupo = 1
# print(len(pessoas))

pessoasPorGrupo = int(input("Pessoas por grupo: "))

for pessoa in pessoas:
    if(aux % pessoasPorGrupo == 0):
        saida.write("\n   Grupo "+str(grupo)+"\n")
        grupo += 1
    saida.write(pessoa.capitalize())
    aux += 1

lidos.close()
saida.close()
