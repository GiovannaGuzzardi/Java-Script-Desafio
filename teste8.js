/*
    Data: 17/12/2024
    Desafio: Escrever uma função que recebe uma array de funções e realiza uma conta de fim ao inicio com funções aninhadas
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        var value = x
        functions.reverse().map((item)=>{
            value = item(value)
        })
        return value
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */