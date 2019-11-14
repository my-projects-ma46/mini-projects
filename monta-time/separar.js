// incluindo função de calcular times
var { calcularTimes } = require('./funcoes/calcularTimes');

// requisição de jogadores
var { users } = require('./funcoes/users');

// n° de pessoas por time pode vir como parâmetro da requisição
const pessoasPorTime = 3;

var {teams, reserve} = calcularTimes(users, pessoasPorTime);

// imprimindo dados para debug
console.clear();
console.log("todos os jogadores");
console.log(users);
console.log("");

console.log('\ntimes:');
for(var i = 0; i<teams.length; i++) {
    console.log(teams[i]);
    console.log('');
}
console.log('\nreserva:');
console.log(reserve);


