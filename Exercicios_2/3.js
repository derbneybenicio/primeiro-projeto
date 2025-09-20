// 3. Faça um programa, utilizando while e listas, que permita o usuário escrever o nome de cinco pessoas e os mostre na tela.

const nome_1 = "Emanuel"
const nome_2 = "Benício"
const nome_3 = "Samuel"
const nome_4 = "Ana"
const nome_5 = "Amanda"

let index = 0;

const listaDeNomes = [];
const listaTemporaria = [nome_1, nome_2, nome_3, nome_4, nome_5];

// 1. resoluçao
while (index < 5) {
    listaDeNomes[index] = listaTemporaria[index];
    index += 1;
}

// 2. resoluçao (spread operator) 
const listaDeNome2 = [...listaTemporaria];

// 3. resoluçao (push)
const listaDeNomes3 = [];
while (index < 5) {
    listaDeNomes3.push(listaTemporaria[index]);
    index += 1;
}
