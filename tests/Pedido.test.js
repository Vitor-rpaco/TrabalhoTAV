const Pedido = require('../models/Pedido.js');

let valorTotal = 100;
let pedido = new Pedido(valorTotal, 'Rua Lauro Mauro', 'Cartão de Crédito', ['A', 'B', 'C']);

test('Calcular frete', () => {
    let target = valorTotal*0.10;
    
    expect(pedido.calcularFrete())
    .toBe(target);
});