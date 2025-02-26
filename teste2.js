/*
    Data: 05/12/2025
    Desafio:    Criar uma função que recebe um numero aleatorio e retorna uma função contadora onde cada vez que ela for chamada o numero original tem um acrescimo 
    Exemplo:    crio o c = create counter(13) - 13 é a base
                c() - deve retornar 13 - primeira chamada 
                c() - deve retornar 14 - segunda chamada 
                c() - deve retornar 15 - terceira chamada
    Aprendizado: 
        ao fazer var x = funcão(n) eu instancializo a função então x passa a receber as funções da mesma assim como uma classe, no entanto ela não recebe suas variaveis
        no entanto ao fazer a função aninhada todas as filhas recebem os valores do pai como se fossem valores globais e mutaveis
*/
/**
 * serve para descrever o proposito de uma função
 * Indicar os tipos esperados de parâmetros e retornos. 
 * @param {number} n
 * @return {Function} counter
*/

var createCounter = function(n) {
    var counterInt = 0
    var value
    console.log(counterInt)
    return function() {
        value =  n + counterInt
        counterInt += 1
        return value
    };
};

 const counter = createCounter(10)
 console.log(counter()) // 11
 console.log(counter()) // 11
 console.log(counter()) // 11
