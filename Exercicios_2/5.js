// 5. Utilize a lista abaixo e calcule a media dos valores contidos na lista
// [0, 5, 10, 12, 8, 4, 23, 17, 9, 5, 2, 1, 7, 7, 10]

const lista = [0, 5, 10, 12, 8, 4, 23, 17, 9, 5, 2, 1, 7, 7, 10];

let somatorio = 0;
for (let i = 0; i < lista.length; i += 1) {
    somatorio += lista[i];
}
console.log(somatorio)
console.log(lista.length)
const media = (somatorio/lista.length)
console.log(media)