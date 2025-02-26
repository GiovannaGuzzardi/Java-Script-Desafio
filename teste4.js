/*
    Data: 11/12/2024
    Desafio: Escrever uma função que aceita o valor inicial integer init e retorna um objeto com tres funções
        increment -> incrementa valor
        decrement -> decrementa o valor
        reset -> seta valor inicial
    Aprendizado: 
        foi tranquilo
        
*/
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    value = init
    return {
        increment : function(){
            value += 1
            return value
        },
        decrement : function(){
            value -= 1
            return value
        },
        reset : function(){
            value = init
            return value
        }
    }
    
};


 const counter = createCounter(5)
 counter.increment(); // 6
 counter.reset(); // 5
 counter.decrement(); // 4
 