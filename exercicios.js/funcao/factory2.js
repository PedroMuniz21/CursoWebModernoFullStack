function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 1199.33));
console.log(criarProduto('ipad', 1199.33));
