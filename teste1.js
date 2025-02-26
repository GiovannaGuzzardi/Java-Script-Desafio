/*
    Data: 05/12/2024
    Desafio: Escrever uma função que retorna uma nova função que sempre retorna "Hello World"
    Aprendizado: 
        aninhamento de funções
        parece um objeto ou classe com atributos proprios
            ao atribuir a função a uma constante ela recebe seus metodos de acordo com argumento dado
        print não existe no java script, apenas console.log
        
*/

function createHelloWorld () {
    return () => {
       return "Hello World"
    };
}
const teste = createHelloWorld()

console.log(teste())