// 1. Criar um programa que percorra uma lista de alunos e exiba quem está aprovado ou reprovado, além de separar por turmas.

const alunos = [
    { nome: "Maria", turma: 1, media: 8 }, // index = 0
    { nome: "João", turma: 1, media: 5 }, // index = 1
    { nome: "Pedro", turma: 2, media: 6 }, // index = 2
    { nome: "Ana", turma: 2, media: 9 }, // index = 3
    { nome: "Célia", turma: 3, media: 6 } // index = 4
];

// percorrer a lista
const listaTemporariaDaTurma = [];
// crio uma nova lista com o metodo MAP retornando uma lista de aluno.turma
const numerosDasTurmas = alunos.map((aluno) => aluno.turma);
// crio uma nova lista usando o SET (remove duplicatas)
const turmasSemRepeticoes = [...new Set(numerosDasTurmas)];

const turmasAtualizadas = [];

for (let i = 0; i < turmasSemRepeticoes.length; i++) {
    const alunosPorTurma = alunos.filter((aluno) => aluno.turma === turmasSemRepeticoes[i])
    
    for (let j = 0; j < alunosPorTurma.length; j++) {
        if (alunosPorTurma[j].media > 6) {
            alunosPorTurma[j].passou = true
        }
    }
    
    turmasAtualizadas.push(alunosPorTurma)
}

console.log(turmasAtualizadas)


