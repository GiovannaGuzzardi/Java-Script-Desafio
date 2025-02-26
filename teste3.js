/*
    Data: 05/12/2024
    Desafio: Escrever uma função chamada expect para teste, nela vc recebe um valor (val) e deve retornar um objeto com duas funções
        toBe(val2) recebe outro valor, se igual a val retorna true e se não da um erro
        notToBe(val2) o contrario da outra
        
    Aprendizado: 
        aninhamento de funções
        parece um objeto ou classe com atributos proprios
            ao atribuir a função a uma constante ela recebe seus metodos de acordo com argumento dado
        print não existe no java script, apenas console.log
        
*/

/**
 * @param {string} val
 * @return {Object}
 */

function expect(val) {
    return {
    toBe: function (val2) {
        
        try{
            if (val !== val2) {throw new Error("Not Equal"); }
            return { value : true}
        }
        catch(e){
            return {error : e.message }
        }
    },
    notToBe: function (val2) {
        try{
            if (val == val2) { throw new Error("Equal");}
            return  { value : true}
        }
        catch(e){
            return {error : e.message}
        }
    }
    }
};


console.log(expect(5).toBe(5))
console.log(expect(5).notToBe(5))
console.log(expect(5).toBe(6))
console.log(expect(5).notToBe(6))
