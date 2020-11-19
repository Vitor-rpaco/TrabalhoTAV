const ItensCarrinho = require('../models/ItensCarrinho.js');
const Produto = require('../models/Produto.js');

let codigo = 10; let nome = 'Caneta'; let cor = 'Azul'; let preco = 1.00; 
let qtdComprada = 1; let qtdEstoque = 199;
// let produto = new Produto(codigo, nome, cor, preco);
let itensCarrinho = new ItensCarrinho();

test('Instanciar Produto', () => {

    expect(itensCarrinho.instanciarProduto(codigo, nome, cor, preco))
    .toBeInstanceOf(Produto);
});

