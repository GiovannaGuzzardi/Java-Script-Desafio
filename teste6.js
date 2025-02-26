/*
    Data: 17/12/2024
    Desafio: Escrever uma função que recebe uma array e uma função de argumento e retorna um array filtrado
         fn -> função de comparação que retorna um boolean
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    filteredArr = []
    arr.map((item, i)=>{
            if (fn(item,i)){
                filteredArr.push(arr[i])
            }
        }
    )
    return filteredArr
};

// dava para usar filter