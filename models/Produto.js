module.exports =
class Produto{

    constructor(CodigoProduto=-23, nome = "AlgumaCoisa", cor="Azuroxo", preco=99999) {
        
        this.CodigoProduto = CodigoProduto;
        this.nome = nome;
        this.cor = cor;
        this.preco = preco;
        this.qtdEstoque = (Math.ceil(Math.random() + 1) * 100);
    }

    getCodigoProduto(){

        return this.CodigoProduto;
    }

    getCor(){
    
        return this.cor;
    }

    getPreco(){

        return this.preco;
    }

    setCodigoProduto(novoCodigo){
        
        this.CodigoProduto = novoCodigo;
    }
    
    setCor(novaCor){

        this.cor = novaCor;
    }

    setPreco(novoPreco){

        if(novoPreco <= 0 || typeof(novoPreco) != 'number')
            return false;
        
        this.preco = novoPreco;
        return novoPreco;
    }

    removeEstoque(qtd){
        if(typeof(qtd) != 'number'){
            return false;
        }

        this.qtdEstoque -= qtd;
        return this.qtdEstoque;
    }

    adicionaAoEstoque(qtd){
        if(typeof(qtd) != 'number'){
            return false;
        }

        this.qtdEstoque += qtd
        return this.qtdEstoque;
    }

    busca(codigo){
        
        return this.CodigoProduto === codigo ? true : false;
    }
}