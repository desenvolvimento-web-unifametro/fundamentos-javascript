
// metodos x funcao global

// metodos

const falando = "vc poderia falar mais alto?";

const falandoAlto = falando.toUpperCase(); 
// console.log("frase teste".toUpperCase());

// const falandoAltoOutraForma = toUpperCase(falandoAlto); erro

// const falandoAltoOutraForma = toUpperCase("mudou essa?"); // erro

// console.log(falandoAltoOutraForma); // erro

console.log(falandoAlto);

console.log(falandoAlto.toLowerCase());

// qual o resultado final da variavel falandoAlto?

console.log("resultado final: ", falandoAlto);


// funcao global

const numeroString = "100";

const numeroTransformado = Number(numeroString);

// const numeroTransformadoOutraForma = numeroString.Number(); // erro

console.log("resultado numero final é: ", numeroTransformado);
console.log(Number(numeroString));


// .replaceAll();

const stringComEspaco = "Fulano da Silva";

const stringSemEspaco = stringComEspaco.replaceAll(" ", "");

console.log(stringSemEspaco);

// Number()

const stringNumero = "50";

const novoNumero = Number(stringNumero);

console.log(novoNumero);

