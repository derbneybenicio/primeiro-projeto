// 5. Verificação de Triângulo:
// Receba os comprimentos dos três lados de um triângulo e informe se ele é equilátero, isósceles ou escaleno. 

// equilatero = 3 lados sao iguais
// isosceles = apenas 2 lados sao iguais
// escaleno todos os lados sao diferentes

const ladoUm = 20;
const ladoDois = 20;
const ladoTres = 20;

if (ladoUm === ladoDois && ladoUm === ladoTres) {
    console.log("equilatero")
} else if (
    ladoUm === ladoDois && ladoUm !== ladoTres 
    || ladoUm !== ladoDois && ladoDois === ladoTres 
    || ladoUm === ladoTres && ladoTres !== ladoDois) {
    console.log("isosceles")
} else {
    console.log("escaleno")
}

// if (ladoUm === ladoDois && ladoUm === ladoTres) {
//     console.log("equilatero")
// } else if (ladoUm === ladoDois || ladoUm === ladoTres || ladoDois === ladoTres) {
//     console.log("isosceles")
// } else {
//     console.log("escaleno")
// }