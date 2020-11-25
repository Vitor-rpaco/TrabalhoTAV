const Pedido = require('../models/Pedido.js');

let valorTotal = 100;
let pedido = new Pedido(valorTotal, 'Rua Lauro Mauro', 'Cartão de Crédito', ['A', 'B', 'C']);

test('Calcular frete', () => {

    let target = valorTotal*0.10;
    
    expect(pedido.calcularFrete())
    .toBe(target);
});

test('Exibir nota fiscal', () => {

    expect(pedido.exibirNotaFiscal())
    .toBeInstanceOf(Pedido);
});

test('Desconto no preço final', () => {
    
    let valorDoDesconto = 0.10;
    let target = valorTotal * 0.90;

    expect(pedido.desconto(valorDoDesconto))
    .toBe(target);
});

test('Valor do desconto é inválido', () => {
    
    let valorDoDesconto = 'ABC';

    expect(pedido.desconto(valorDoDesconto))
    .toBeFalsy();
});