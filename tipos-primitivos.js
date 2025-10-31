// TIPOS PRIMITIVOS

// String e Number => sao tratados como true em contextos booleanos

// null e undefined => sao tratados como false em contextos booleanos
// zero e string vazia => sao tratados como false em contextos booleanos
// NaN => sao tratados como false em contextos booleanos


// string
let nome = "Fulano";

let sobrenome = "da Cicrana";

console.log(typeof(nome)); // typeof(variavel)  - funcao que mostra o tipo da variavel

// console.log("Qual o tipo: ", nome); // a virgula os separa parâmetros da funcao- funcao do console.log

console.log("E ae, " + nome); // concatenacao

console.log("Casal Toxico: ", nome + sobrenome);
console.log("Casal Toxico: ", nome + " " + sobrenome);

console.log(`E ae, ${nome} ${sobrenome}`); // interpolacao


// tipo: number
let idade = 34;
let altura = 1.80;
let peso = -80;

console.log("Minha idade: ", idade);


// tipo: boolean
let possuiFaculdade = true;
let possuePos = false;


// tipo: null (vazio)
let vazio = null; // null  
let vazioFake = ""; // string vazia

let endereco = null;

console.log("Endereço: ", endereco);

console.log(vazio);
console.log(vazioFake);

let usarNumeroNull = null;

let multiplicacao = 10 * null;
console.log("Resultado da multiplicacao com numeroNull: ", multiplicacao);


// tipo: undefined
let naoDefinida = undefined;
console.log(naoDefinida);

let semValorAtribuido;
console.log(semValorAtribuido);

let usarValorUndefined = undefined;

let usarValorUndefinedNaoAtribuido;

// outro exemplo: tipo: undefined

let nomeUsuario;

// o retorno vai ser undefined porque 
console.log(nomeUsuario); // undefined



let multiplicacaoUndefined = 10 * usarValorUndefined;
console.log("Resultado da multiplicacao com valorUndefined: ", multiplicacaoUndefined);

let multiplicacaoUndefinedNaoAtribuido = 20 * usarValorUndefinedNaoAtribuido;
console.log("Resultado da multiplicacao com multiplicacaoUndefinedNaoAtribuido: ", multiplicacaoUndefinedNaoAtribuido);


// tipo: NaN
let naoENumero = "fulano" * 5;

console.log(naoENumero);