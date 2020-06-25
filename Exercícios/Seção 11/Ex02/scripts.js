class CarrinhoDeCompras {

    constructor(itens, qtdTotal, valTotal) {
        this.itens = itens;
        this.qtdTotal = qtdTotal;
        this.valTotal = valTotal;
    }

    adicionaItens(item) {

        let contador = 0;

        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }

        if(contador == 0){
            this.itens.push(item);
        }

        this.qtdTotal += item.qtd;
        this.valTotal += item.preco * item.qtd;
    }

    removeItens(item) {
        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
               
                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function(obj) { return obj.id == item.id});

                this.itens.splice(index, 1);

                this.qtdTotal -= this.itens[itemCarrinho].qtd;
                this.valTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;
            }
        }
    }
}

let carrinho = new CarrinhoDeCompras([
    {
        id: 01,
        nome:  "camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 02,
        nome: "Pneu",
        qtd: 2,
        preco: 200
    }
], 3, 220);

console.log(carrinho);

carrinho.adicionaItens({id:01, nome:"camisa", qtd: 2, preco: 20});

console.log(carrinho);

carrinho.adicionaItens({id:03, nome:"Tênis", qtd: 3, preco: 80});

console.log(carrinho);

carrinho.removeItens({id:01, nome:"camisa", qtd: 2, preco: 20});

console.log(carrinho);
