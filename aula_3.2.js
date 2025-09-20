
/*
    Simbolo: >  Significado: Maior que.
    Simbolo: <  significado: Menor que.
    Simbolo: >= significado: Maior ou igual a que:
    Simbolo: <= significado: Menor ou igual a que:
    Simbolo: == significado: Igual a que:

    Simbolo: && significa: E.
    Simbolo: || significa: Ou.
*/

const media = (2 + 10 + 0 + 5) / 4;

if (media < 3) {
    console.log("Reprovado");
} else if (media >= 3 && media < 7) {
    console.log("Recuperação");
} else {
    console.log("Aprovado")
}