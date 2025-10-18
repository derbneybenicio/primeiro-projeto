// for (variavel iteradora; condicional; ação)

// iterador += 1   => iterador = iterador + 1

for (let iterador = 0; iterador < 10; iterador += 1) {
    console.log(iterador)
}

// while
let numeroAleatorio = Math.floor(Math.random() * 100);

while(numeroAleatorio) {
    console.log(numeroAleatorio)
    if (numeroAleatorio < 20) {
        break;
    }
    numeroAleatorio = Math.floor(Math.random() * 100);
}