// FUNCTION DECLARATION
function soma (x, y){
    return x + y
    // é possivel usar essa função antes dela está no código, isso porquê o javascript lê todas as funções para depois lê o código
} 

// FUNCTION EXPRESSION
const sub = function (x, y) {
    return x - y
}

// NAMED FUNCTION EXPRESSION
const mult = function mult(x, y) {
    return x * y
    // a vantagem é que quando estivermos debugando ou logando a aplicação, o node da função vai aparecer na stack se ocorrer algum erro
}
