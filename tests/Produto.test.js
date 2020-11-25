const Produto = require('../models/Produto.js');

let codigo = 10; let nome = 'Caneta'; let cor = 'Azul'; let preco = 1.00;
let produto = new Produto(codigo, nome, cor, preco);

test('Adicionar quantidade válida ao estoque', () => {
    let qtdPreAdicao = produto.qtdEstoque;
    let qtd = 1;
    expect(produto.adicionaAoEstoque(qtd))
    .toBe(qtdPreAdicao + qtd);
});

test('Set de preços negativos', () => {

    expect(produto.setPreco(-10))
    .toBeFalsy();
});

test('Set de preço igual zero', () => {

    expect(produto.setPreco(0))
    .toBeFalsy();
});

test('Set de preços inválidos', () => {

    expect(produto.setPreco('preco'))
    .toBeFalsy();
});

test('Adicionar quantidade inválida ao estoque', () => {

    let qtd = 'ABC';
    expect(produto.adicionaAoEstoque(qtd))
    .toBeFalsy();
});

test('Remove quantidade válida do estoque', () => {

    let qtdPreRemocao = produto.qtdEstoque;
    let qtd = 1;
    expect(produto.removeEstoque(qtd))
    .toBe(qtdPreRemocao - qtd);
});

test('Remove quantidade inválida do estoque', () => {

    let qtd = 'ABC';
    expect(produto.removeEstoque(qtd))
    .toBeFalsy();
});