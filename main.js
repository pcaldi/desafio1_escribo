/*
Descrição:
    - Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores
    inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

Exemplos:
    - Caso sua função receba o inteiro 10, ela deve retornar 23, resultante do somatório dos números 3, 5, 6 e
    9 que são menores que 10.
    - Caso sua função receba o inteiro 11, ela deve retornar 33, resultante do somatório dos números 3, 5, 6, 9
    e 10 que são menores que 11.
*/



function divisiveis3e5(numero) {
    let somatorio = 0;
    for (let i = 0; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }
    return somatorio;
}

const numeroInformado = 5;
const resultado = divisiveis3e5(numeroInformado);
console.log(`O somatório dos números divisíveis por 3 ou 5 abaixo de ${numeroInformado} é: ${resultado}`);
