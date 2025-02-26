/*
    Data: 18/12/2024
    Desafio: Escrever uma função once que tem uma função interna que só funciona uma vez
    Aprendizado: 
        sempre lembrar de que tudo depois do return fica inutilizado
        passar o ...args para ambas

*/
/**
 * @param {Function} fn
 * @return {Function}
 */
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    var destroyed = false
    return function(...args){
        if(destroyed){
            return undefined
        }
        destroyed = true
        return fn(...args)
    
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

