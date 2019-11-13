
var { shuffle } = require('./funcoes/shuffle');
var { calcularTimes } = require('./funcoes/calcularTimes');
var { users } = require('./funcoes/users');

print = console.log;

console.clear();


const pessoasPorTime = 6;
var jogadores = shuffle(users);
print("todos os jogadores");
print(jogadores);
print("\n");
var times = calcularTimes(jogadores, pessoasPorTime);
print(times);
