/*
    Data: 17/12/2024
    Desafio: Escrever uma função que recebe uma array e uma função que recebe dois argumentos e retorna uma soma de acordo com a função fn
         fn -> função de comparação que retorna um boolean
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    var final = init
    nums.map((item,i)=>{
        final = fn(final, item)
    })
    return final
};

var compose = function(functions) {
    return function(x) {
        var value = x
        functions.reverse().map((item)=>{
            value = item(value)
        })
        return value
    }
};