// Objetos - {} - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// Ao inves de utilizar dessa forma:
const nomeDaPessoa = "Benicio"
const idadeDaPessoa = 25
const profissaoDaPessoa = "Maromba"
// Iremos utilizar a notação de objeto:
const pessoa = {
    nome: "Benicio",
    idade: 25,
    profissao: "Maromba"
}
// Object.freeze(pessoa)

// duas formas de atribuir NOVOS atributos para um objeto
pessoa.hobby = "Surf"
pessoa["salario"] = 50000

console.log(pessoa)

//deletar atributo de um objeto
//delete pessoa.hobby
