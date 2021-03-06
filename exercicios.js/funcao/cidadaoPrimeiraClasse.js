// Função em JS É Frirst-Class Object(Citizens)
// Higher-Order Function(Pilar, programação funcional)

//Criar funcao de forma literal
function fun1() { }
 
//Armazenar em uma variável
const fun2 = function () { }

// armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Olá'}
console.log(obj.falar())

//Passar uma função como parametro
function run (fun){
    fun()
}
run(function () { console.log('Executando....')})

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(4)

