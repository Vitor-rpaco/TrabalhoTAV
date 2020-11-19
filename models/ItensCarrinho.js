const Produto = require('../models/Produto.js');
module.exports =
class ItensCarrinho{

    constructor(codigo, nome, cor, preco, qtdComprada){
        this.codigo = codigo;
        this.nome = nome;
        this.cor = cor;
        this.preco = preco;
        this.qtdComprada = qtdComprada;
        this.produto = this.instanciarProduto(this.codigo, this.nome, this.cor, this.preco, this.qtdComprada);
    }

    instanciarProduto(codigo, nome, cor, preco){

        let novoProduto = new Produto(codigo, nome, cor, preco);

        if(this.qtdComprada > novoProduto.qtdEstoque)
            this.qtdComprada = novoProduto.qtdEstoque;

        novoProduto.removeEstoque(this.qtdComprada);
        return novoProduto;
    }
    
    busca(codigo){
        
        return this.codigo === codigo ? true : false;
    }

    removerItem(qtd){

        this.qtdComprada -= qtd;
        this.produto.adicionaAoEstoque(qtd);

        return this.qtdComprada;
    }

}