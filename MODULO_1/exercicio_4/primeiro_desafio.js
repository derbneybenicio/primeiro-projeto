// Regras:

// Cada produto deve ser representado como um objeto, contendo:

// nome (string)

// preco (number)

// quantidade (number)

// Os produtos devem ser armazenados em um array chamado carrinho.

// Implemente as seguintes funções:

// calcularTotal() → retorna o valor total do carrinho (preço × quantidade de cada produto).

// adicionarProduto(nome, preco, quantidade) → adiciona um novo produto ao carrinho.

// aplicarDesconto(percentual) → calcula o valor total aplicando um desconto em %.

// Teste o programa com alguns produtos e mostre no console:

// O carrinho inicial

// O total da compra

// O total após adicionar um produto

// O total com desconto

// 🔧 Desafios Extras (opcional)

// Criar uma função para remover um produto pelo nome.

// Criar uma função que mostre apenas os produtos acima de R$ 500.

// Mostrar o valor médio dos produtos no carrinho.


const carrinho = [
    { nome: "arroz", preco: 5, quantidade: 600 },
    { nome: "feijão", preco: 7, quantidade: 500 },
    { nome: "macarrão", preco: 2, quantidade: 400 },
    { nome: "café", preco: 14, quantidade: 800 },
    { nome: "açucar", preco: 4, quantidade: 150 }
];

/////////////////////////////////////////////////////////////////////////////////////////////////////
function calcularTotal(carrinhoParametro){
    const compraTotal = carrinhoParametro.reduce((acc, cur) => acc + (cur.preco * cur.quantidade), 0);
    return compraTotal
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function adicionarProduto(nome, preco, quantidade, carrinhoParametro){
    const produto = {nome: nome, preco: preco, quantidade: quantidade};
    carrinhoParametro.push(produto);
    produto
    return carrinhoParametro
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
function aplicarDesconto(percentual){
    const desconto = percentual / 100;
    const somaAtualizada = calcularTotal(carrinho)
    const compraComDesconto = somaAtualizada - (somaAtualizada * desconto)
    return compraComDesconto
}
////////////////////////////////////////////////////////////////////////////////////////////////////////

const compraTotal = calcularTotal(carrinho)
console.log("Carrinho Original: ", carrinho);
const produtoInserido = adicionarProduto("óleo", 5, 50, carrinho)
console.log("Primeiro produto inserido: ", produtoInserido);
const produtoInserido2 = adicionarProduto("sabao", 2, 100, carrinho)
console.log("Segundo produto inserido: ", produtoInserido2)
const totalAtualizado = calcularTotal(carrinho)
const compraComDescontoAtualizada = aplicarDesconto(30)


console.log("total atualizado: ", totalAtualizado);
console.log("Compra Atualizada com desconto: ", compraComDescontoAtualizada);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function removerProduto(nome){
    const itenEscolhido = carrinho.findIndex((iten) => iten.nome == nome );
    if(itenEscolhido == -1){
        return {Erro: "produto não encontrado"}
    } else {
        const removerIten = carrinho.splice(itenEscolhido, 1);
     return removerIten
    }
     
}   

const produtoRemovido = removerProduto("feijão")
console.log("Produto Removido: ", produtoRemovido)
console.log("Carrinho Atualizado:", carrinho)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function filtrarValores(valor){
    const filtro = carrinho.filter((preco) => (preco.preco * preco.quantidade) >= valor);
    return {resultado: filtro }
}
const produtoAcimaDe500 = filtrarValores(500)
console.log("Produtos acima de R$ 500,00", produtoAcimaDe500)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ValorMedioDosProdutos(carrinhoParametro2){
    const quantidadeTotalDeProdutos = calcularTotal(carrinho)
    const somaDaQuantidade = carrinhoParametro2.reduce((acc, cur) => acc + cur.quantidade, 0);
    somaDaQuantidade
    const media = quantidadeTotalDeProdutos / somaDaQuantidade
    return media
}

const mediaAtualizada = ValorMedioDosProdutos(carrinho)
console.log("Valor Médio dos Produtos do Carrinho", mediaAtualizada)