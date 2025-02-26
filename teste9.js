/*
    Data: 18/12/2024
    Desafio: Escrever uma função argumentsLength que conta a quantidade de argumentos que a função recebeu
    Aprendizado: 
        existe uma função nativa do java script para isso
        ...args -> forma moderna de lidar com um número variavel de argumentos
        no typescript tbm funciona perfeitamente

*/

var argumentsLength = function(...args) {
    return  arguments.length
};


a = argumentsLength(1, 2, 3); // 3

console.log(a)