TREZE = 13
INICIO = 255
FIM = 999
NUM_PARTICIPANTES = 2

def som(a, b):
    return a + b
def sub(a, b):
    return a - b
def mult(a, b):
    return a * b
def div(a, b):
    if b == 0:
        return a
    return a / b
def elev(a, b):
    return a**b

oper_dic = {som:'+', sub:'-', mult:'*', div:'/', elev:'^'}
# print(oper_dic)
operador = list(oper_dic)
qtd_oper = len(operador)

def acha_treze(entrada):
    a, b, c = entrada[2], entrada[1], entrada[0]
    for i in range(qtd_oper):
        for j in range(qtd_oper):
            # (a _i_ b) _j_ c
            result = operador[j](operador[i](a, b), c )
            if( result == TREZE):
                return i, j, ''
    for i in range(qtd_oper):
        for j in range(qtd_oper):
            result = operador[j](operador[i](a, b), c )
            if((result + NUM_PARTICIPANTES) == TREZE):
                return i, j, ", com + {} participantes".format(NUM_PARTICIPANTES)
            if((result - NUM_PARTICIPANTES) == TREZE):
                return i, j, ", com - {} participantes".format(NUM_PARTICIPANTES)
            
    return -1, -1, ''

def acha_permut(a, b, c):
    permuts = [
        [a, b, c],
        [a, c, b],
        [c, b, a],
        [b, a, c]
    ]
    for entrada in permuts:
        oper1, oper2, extra = acha_treze(entrada)
        if(oper1 != -1):
            return True, oper1, oper2, entrada, extra
        
    return False, oper1, oper2, [], ''

# para debug
enc = 0
part = 0
nao = 0

for episodio in range(INICIO, FIM+1):
    numero = str(episodio)

    centena, dezena, unidade = int(numero[2]), int(numero[1]), int(numero[0])

    achou, oper1, oper2, valores, extra = acha_permut(centena, dezena, unidade)

    if(achou):
        print("Episódio {}: ".format(episodio),end='')
        res_parc = operador[oper1](valores[2], valores[1])
        if(extra == ''):
            enc += 1
        else:
            part += 1
        print("{} {} {} = {}, e {} {} {}{} = 13".format(
            valores[2], oper_dic[operador[oper1]], valores[1], res_parc,
            res_parc, oper_dic[operador[oper2]], valores[0], extra )
        )
    else:
        nao += 1
        #print("Episódio {}: não foi encontrado".format(episodio))

# print(enc, part, nao)