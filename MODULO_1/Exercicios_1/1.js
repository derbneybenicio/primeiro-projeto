/*
1. Verificação de Paridade:
Crie um programa que receba um número inteiro e imprima se ele é par ou ímpar. 
*/

// Como identificar se o numero é par ou impar?

const numero = 11;
const resultado = numero % 2;

if (resultado == 0) {
    console.log("PAR");
} else {
    console.log("IMPAR");
}
