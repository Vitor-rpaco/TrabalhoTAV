const ItensCarrinho = require('../models/ItensCarrinho.js');
const Pedido = require('../models/Pedido.js');
module.exports =
class Carrinho{

    constructor(){
        this.listaDeItens = [];
    }

    instanciaItem(codigo, nome, cor, preco, qtdComprada){

        let item = new ItensCarrinho(codigo, nome, cor, preco, qtdComprada);
        return item;
    }

    adicionaAoCarrinho(item){

        this.listaDeItens.push(item);
        return this.listaDeItens;
    }

    encontrarItem(codigo){

        let itemDaLista;

        for(let i = 0; i < this.listaDeItens.length; i += 1){
                
            itemDaLista = this.listaDeItens[i];

            if(itemDaLista.busca(codigo) === true){
                return itemDaLista;
            }

        }
        
        return null;
    }

    removerItem(codigo, qtd){

        let elemento = this.encontrarItem(codigo);
        let novaQtd = elemento.removerItem(qtd);
        
        if(novaQtd == 0){
            
            //Seleciona no array o indice do item a ser removido
            let indiceElemento = this.listaDeItens.indexOf(elemento);
            
            //Seleciona no array o item a ser removido
            let elementoPRemocao = this.listaDeItens[indiceElemento];
            this.listaDeItens.splice(indiceElemento, 1);

            return this.listaDeItens;
        }else{

            return this.listaDeItens;
        }
    }

    getLista(){
        return this.listaDeItens;
    }

    limparLista(){

        this.listaDeItens = [];
        return this.listaDeItens;
    }

    calcularTotal(){

        let valorTotal = this.listaDeItens
        .reduce((total, item) => total + item.preco, 0);

        return valorTotal;
    }

    fecharPagamento(endereco, formaDePagamento, cliente){

        for(let i = 0; i < this.listaDeItens.length; i++)
        this.listaDeItens[i].produto = {};

        let pedido = new Pedido(this.calcularTotal(), endereco, 
        formaDePagamento, this.listaDeItens, cliente);

        return pedido;
    }
}