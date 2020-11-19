module.exports =
class Pedido{

    constructor(valorTotal=0, enderecoEntrega= '', formaDePagamento='', itens=[], cliente){
        this.numeroPedido = (Math.random() * 1000 + new Date().getMilliseconds());
        this.cliente = cliente;
        this.enderecoEntrega = enderecoEntrega;
        this.valorTotal = valorTotal;    
        this.formaDePagamento = formaDePagamento;
        this.itensDoPedido = itens;
    }

    mostrarItensPedido(){

        return this.itensDoPedido;
    }

    exibirNotaFiscal(){
        return this;
    }

    getValorTotal(){

        return this.valorTotal;
    }

    setValorTotal(valorTotal){

        this.valorTotal = valorTotal;
    }

    getFormaDePagamento(){

        return this.formaDePagamento;
    }

    setFormaDePagamento(formaDePagamento){

        this.formaDePagamento = formaDePagamento;
    }

    calcularFrete(){

        return this.valorTotal*0.10;
    }
}