let idade = 20;

if (idade >= 18) {
  console.log("Você é maior de idade.");
  // Este bloco só é executado se 'idade' for 18 ou mais.
}

console.log("Fim do programa.");

let estaChovendo = false;

// if else

if (estaChovendo) {
  console.log("Leve um guarda-chuva.");
} else {
  console.log("Não precisa de guarda-chuva.");
}

// if else if

let nota = 8.5;

if (nota >= 9) {
  console.log("Ótimo (A)");
} else if (nota >= 7) {
  console.log("Bom (B)");
} else if (nota >= 5) {
  console.log("Regular (C)");
} else {
  console.log("Insuficiente (F)");
}


// condicionais com operadores lógicos
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