// 2. Criar um programa que percorra uma lista de alunos e exiba quem está aprovado ou reprovado baseando-se na media das notas.


let alunos = [
    { nome: "Maria", notas: [8, 9, 7] },
    { nome: "João", notas: [5, 6, 4] },
    { nome: "Ana", notas: [9, 8, 10] },
    { nome: "Pedro", notas: [6, 5, 7] },
    { nome: "Lucas", notas: [3, 4, 5] }
];

let ListaDeNotas = alunos.map((nota) => nota.notas);


for(let i = 0; i <= ListaDeNotas.length; i++){
    let nomes = alunos.filter((nomeDoAluno) => nomeDoAluno.notas === ListaDeNotas[i])

    for(let j = 0; j <= alunos.length; j++)
     somador = 0;
    somador += ListaDeNotas[i]
    let media = somador / ListaDeNotas.length;
      let resultado = [];
    

    if (media <= 5 ){
        resultado.push(nomes && media);
        console.log(resultado + nomes + media + "Reprovado")
        } else {
            resultado.push(nomes && media);
            console.log(resultado + "Aprovado")
        } 
        
} 
 
