// 6. Receba a lista abaixo e apresente na tela apenas aqueles que são menores que 8
// [0, 5, 10, 12, 8, 4, 23, 17, 9, 5, 2, 1, 7, 7, 10]

const lista = [0, 5, 10, 12, 8, 4, 23, 17, 9, 5, 2, 1, 7, 7, 10];

for (let i = 0; i < lista.length; i += 1) {
    if (lista[i] < 8) {
        console.log(lista[i])
    }
}
