// operadores de comparacao

// == igual (compara o valor)
// === igual (compara o valor e o tipo)
// != diferente
// > maior
// < menor
// >= maior ou igual
// <= menor ou igual


// diferenca de == e ===
let numeroValor = 5;
let textoValor = "5";

// O JavaScript converte o texto "5" para o número 5 antes de comparar
if (numeroValor == textoValor) {
  console.log("Os valores são iguais (usando ==).");
} else {
  console.log("Os valores são diferentes.");
}

let numeroValorEtipo = 5;  // Tipo: number
let textoValorEtipo = "5"; // Tipo: string

// 5 (number) não é o mesmo tipo que "5" (string)
if (numeroValorEtipo === textoValorEtipo) {
  console.log("Os valores e tipos são iguais (usando ===).");
} else {
  console.log("Os valores ou os tipos são diferentes.");
}



// operadores logicos

// && e
// || ou
// ! nao

let usuarioLogado = true;
let ehAdmin = false;

// Exemplo com && (E)
if (usuarioLogado && ehAdmin) {
  console.log("Acesso total ao painel de administrador.");
} else {
  console.log("Acesso negado ou limitado.");
}

// Exemplo com || (OU)
let temIngresso = true;
let ehConvidadoVIP = false;

if (temIngresso || ehConvidadoVIP) {
  console.log("Entrada permitida no evento.");
} else {
  console.log("Entrada negada.");
}