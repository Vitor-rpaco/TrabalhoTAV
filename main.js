// const ItensCarrinho = require('./models/ItensCarrinho.js');
// const Produto = require('./models/Produto.js');
const Carrinho = require('./models/Carrinho.js');

let carrinho = new Carrinho();

let item = carrinho.instanciaItem(10, 'Caneta', 'Azul', 1.00, 2);
let item2 = carrinho.instanciaItem(12, 'Caneta', 'Roxo', 3.00, 1);
let item3 = carrinho.instanciaItem(15, 'Caneta', 'Amarelo', 1.50, 1);
carrinho.adicionaAoCarrinho(item);
carrinho.adicionaAoCarrinho(item2);
carrinho.adicionaAoCarrinho(item3);
console.log(carrinho.getLista());
carrinho.removerItem(10, 1);
carrinho.removerItem(12, 1);
console.log('================================================');
console.log(carrinho.getLista());

console.log('*******************PEDIDO***********************')
let pedido = carrinho.fecharPagamento('Rua Lauro Mauro', 'Cartão de Crédito', 'Marco');
console.log(pedido.exibirNotaFiscal());