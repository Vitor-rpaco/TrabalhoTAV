const Produto = require('../models/Produto.js');

let codigo = 10; let nome = 'Caneta'; let cor = 'Azul'; let preco = 1.00;
let produto = new Produto(codigo, nome, cor, preco);

test('Adicionar quantidade válida ao estoque', () => {
    let qtdPreAdicao = produto.qtdEstoque;
    let qtd = 1;
    expect(produto.adicionaAoEstoque(qtd))
    .toBe(qtdPreAdicao + qtd);
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

//Settar preço negativo, settar preço = 0