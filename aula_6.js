// LISTAS ou Array (no caso do javascript)

// observação: SEMPRE utilizar o mesmo TIPO DE VARIAVEL na lista
const frutas = [
  "Maçã",
  "Banana",
  "Laranja",
  "Morango",
  "Uva",
  "Abacaxi",
  "Melancia",
  "Manga",
  "Pêssego",
  "Kiwi",
  "Pitaya"
];

// INDEX (índice) -> mapeia onde está o valor selecionado (0 ... infinito) -> n + 1 posição

for (let index = 0; index < frutas.length; index += 1) {
    if (frutas[index] === 'Uva') {
        frutas[index] = "Tomate"
        console.log(frutas[index])
    }
}

console.log(frutas)