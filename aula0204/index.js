var calculos = require('./calculos');
var calculadora = require('./calculadora');

console.log('soma: ' + calculadora.soma(1,1));
console.log('subtrai: ' + calculadora.subtracao(1,1));
console.log('divide: ' + calculadora.divisao(1,1));
console.log('multiplica: ' + calculadora.multiplicao(1,1));


console.log('is Impar: ' + calculos.impar(5));
console.log('is Par: ' + calculos.par(10));
console.log('is Primo: ' + calculos.primo(135151561));