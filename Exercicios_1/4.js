// 4. Cálculo de Desconto:
// Receba o valor de uma compra e a categoria do cliente (comum, VIP, etc.) e calcule o desconto aplicado, se houver.

const descontoVIPPorcentagem = 0.1;
const descontoComumPorcentagem = 0.075;

const categoriaDoCliente = "COMUM";
const valorDoProduto = 500;

let valorDoDesconto = 0;

if (categoriaDoCliente === 'VIP') {
    valorDoDesconto = valorDoProduto - (valorDoProduto * descontoVIPPorcentagem)
    console.log(valorDoDesconto)
} else if (categoriaDoCliente === 'COMUM') {
    valorDoDesconto = valorDoProduto - (valorDoProduto * descontoComumPorcentagem)
    console.log(valorDoDesconto)
} else {
    console.log("Não há desconto");
}

