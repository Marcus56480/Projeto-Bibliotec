
let nome = "Neymar";
let idade = 25;

//* CONCATENAÇÃO
console.log("Nome: " + nome+ ", Idade: " + idade);

//* INTERPOLAÇÃO
console.log(`Nome: ${nome}, idade: ${idade}`);


console.log(typeof nome);
console.log(typeof idade);

// let soma = "5" + 3; //53 string
// let sub = "5" - 3; // 2 number

// console.log(soma);
// console.log(sub);

// console.log(typeof soma);
// console.log(typeof sub);

// let numero = "ab"

// let convertido = Number(numero);

// console.log(typeof convertido);

//* OPERADORES RELACIONAIS
//*Valida igualdade de valor
// "10" == 10 -> true;

//*Valida igualdade de valor e tipo de dado
// "10" === 10 -> false;

//* ESTRUTURA DE REPETIÇÃO 
let frutas = ["maça", "banana", "Acerola", "Uva"];

console.log(frutas);

frutas.forEach(function(fruta) {
    console.log("Nome: " + fruta)
})

//Resumido em uma linha com arrow fuction
frutas.forEach(fruta => console.log(fruta));