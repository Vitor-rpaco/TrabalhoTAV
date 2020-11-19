module.exports =
class Pedido{

    constructor(valorTotal=0, enderecoEntrega= '', formaDePagamento='', itens=[]){
        this.numeroPedido = (Math.random() * 1000 + new Date().getMilliseconds());
        this.valorTotal = valorTotal;
        this.enderecoEntrega = enderecoEntrega;
        this.formaDePagamento = formaDePagamento;
        this.itensDoPedido = itens;
    }

    mostrarItensPedido(){

        return this.itensDoPedido;
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