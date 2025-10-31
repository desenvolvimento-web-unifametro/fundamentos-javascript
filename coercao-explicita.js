// // coercao de tipos - explicita (para String)

// soma
let numero = 10;
let nomeroTipoString = "10";

// Deixamos claro que queremos CONCATENAR.
// Convertemos o número 10 para a string "10" antes de "somar".
let soma = String(numero) + nomeroTipoString;
console.log("Qual o resultado da soma? ", soma); // "1010"

let numeroCoercao = 1;

// Deixamos claro que queremos CONCATENAR.
let coercaoSoma = String(numeroCoercao) + "1";
console.log("Qual o resultado da coercaoSoma? ", coercaoSoma); // "11"


// // coercao de tipos - explicita (para Number)

// multiplicacao
let numeroMultiplicacaoString = "10";

// Deixamos claro que queremos CALCULAR.
// Convertemos a string "10" para o número 10 antes de multiplicar.
let multiplicacao = 10 * Number(numeroMultiplicacaoString);
console.log("Qual o resultado da multiplicacao? ", multiplicacao); // 100

// subtracao
let numeroSubtracaoString = "10";

// Deixamos claro que queremos CALCULAR.
let subtracao = 100 - Number(numeroSubtracaoString);
console.log("Qual o resultado da subtracao? ", subtracao); // 90