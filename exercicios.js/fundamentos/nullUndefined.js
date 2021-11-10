let valor // não inicializada
console.log(valor)

valor = null
console.log(valor) // Ausência de valor
// console.log(valor.toString()) // ERRO!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)