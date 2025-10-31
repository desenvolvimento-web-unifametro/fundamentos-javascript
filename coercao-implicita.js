// coercao de tipos - implicita

// soma
let numero = 10;
let nomeroTipoString = "10";

let soma = numero + nomeroTipoString;
console.log("Qual o resultado da soma? ", soma);

let numeroCoercao = 1;

let coercaoSoma = numeroCoercao + "1";
console.log("Qual o resultado da coercaoSoma? ", coercaoSoma);



// multiplicacao/subtracao/divisao...
let numeroMultiplicacaoString = "10";
let multiplicacao = 10 * numeroMultiplicacaoString;

console.log("Qual o resultado da multiplicacao? ", multiplicacao);

let numeroSubtracaoString = "10";

let subtracao = 100 - numeroSubtracaoString;
console.log("Qual o resultado da subtracao? ", subtracao);

