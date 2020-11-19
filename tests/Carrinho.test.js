const Carrinho = require('../models/Carrinho.js');
const ItensCarrinho = require('../models/ItensCarrinho.js');
const Pedido = require('../models/Pedido.js');

let carrinho = new Carrinho();
let codigo = 1; let nome = 'Caneta'; let cor = 'Azul'; let preco = 1.00; let qtdComprada = 2;
let cliente = 'Marco';

test('Instanciar item requisitado', () => {

    expect(carrinho.instanciaItem(codigo, nome, cor, preco, qtdComprada))
    .toBeInstanceOf(ItensCarrinho);
})

test('Adicionar item ao carrinho', () => {

    let produto = carrinho.instanciaItem(22, 'tinta', cor, 150.50, qtdComprada)
    expect(carrinho.adicionaAoCarrinho(produto))
    .toContainEqual(produto);
});

test('Encontrar item no carrinho', () => {
    
    carrinho.limparLista();

    let produto = carrinho.instanciaItem(codigo, nome, cor, preco, qtdComprada);
    carrinho.adicionaAoCarrinho(produto);

    expect(carrinho.encontrarItem(codigo))
    .toBe(produto);
});

test('Não encontrar item no carrinho', () => {
    
    carrinho.limparLista();

    let produto = carrinho.instanciaItem(codigo, nome, cor, preco, qtdComprada);
    carrinho.adicionaAoCarrinho(produto);

    expect(carrinho.encontrarItem(105))
    .toBeNull();
});

test('Remover determinada quantidade de um item no carrinho', () => {

    carrinho.limparLista();

    let qtd = 1;
    let produto = carrinho.instanciaItem(codigo, nome, cor, preco, qtdComprada);
    let produto2 = carrinho.instanciaItem(8, nome, cor, preco, qtdComprada);
    carrinho.adicionaAoCarrinho(produto);
    carrinho.adicionaAoCarrinho(produto2);

    expect(carrinho.removerItem(codigo, qtd))
    .toContain(produto);
});

test('Remover um item do carrinho', () => {

    carrinho.limparLista();

    let qtd = 2;

    let produto = carrinho.instanciaItem(codigo, nome, cor, preco, qtdComprada);
    let produto2 = carrinho.instanciaItem(8, nome, cor, preco, qtdComprada);
    carrinho.adicionaAoCarrinho(produto);
    carrinho.adicionaAoCarrinho(produto2);

    expect(carrinho.removerItem(codigo, qtd))
    .not.toContain(produto);
});

test('Calcular valor total', () => {

    carrinho.limparLista();
    let produto = carrinho.instanciaItem(codigo, nome, cor, preco, qtdComprada);
    carrinho.adicionaAoCarrinho(produto);

    expect(carrinho.calcularTotal())
    .toBe(produto.preco);
});

test('pagar o pedido', () => {

    carrinho.limparLista();
    let produto = carrinho.instanciaItem(codigo, nome, cor, preco, qtdComprada);
    carrinho.adicionaAoCarrinho(produto);
    let endereco = 'Rua Lauro Mauro';
    let formaDePagamento = 'Cartao de Credito';

    expect(carrinho.fecharPagamento(carrinho.valorTotal, 
        endereco, formaDePagamento, carrinho.getLista(), cliente))
    .toBeInstanceOf(Pedido);
});