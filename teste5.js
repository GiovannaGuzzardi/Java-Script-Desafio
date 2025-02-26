/*
    Data: 12/12/2024
    Desafio: criar uma função map que recebe uma array(arr) e uma função(fn) de parametros
    Aprendizado: 
        analisar quantos paramentros uma função recebe
            fn por exemplo recebe de 1 ou 2 argumentos, logo na map eu preciso tratar essa posibilidade
            não tem problema inserir mais de um argumento e uma função que recebe apenas um
        array.push(algo) x array[indice] = algo
            as duas implementações funcionam no entando ao igualar por indice estou aberta a erros
            ao implementar por push o valor será adicionado ao final do array e como está dentro de uma iteração será alocado no local e quantidade corretos

        array.map 
            itinera sobre cada item de uma array e retorna uma nova array
        react 
            o react aceita arrays como retorno valido para renderizar componentes da interface então se eu fizer: 
            function App() {
                const elements = [<h1>Hello</h1>, <h2>World</h2>];
                    return <div>{elements}</div>;
                }
            o retorno é: 
                <div>
                    <h1>Hello</h1>
                    <h2>World</h2>
                </div>
        
*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function(arr, fn) {
    const array = []
    for( var i = 0; i < arr.length ;  i++){
        array[i] = fn(arr[i], i) 
    }
    return array
};

var map2 = function(arr, fn) {
    const array = [];
    for (let i = 0; i < arr.length; i++) {
        array.push(fn(arr[i]));
    }
    return array;
};

// map cria uma array e seta ela na variavel
var map3 = function(arr, fn) {
    const array = arr.map((item, i) => {
        return fn(item, i)
    })
    return array
};

array = [1,2,4]
function func(n){
    return n + 1
} 

ar = map(array, func)
console.log(ar)