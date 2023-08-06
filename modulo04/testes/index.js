/* Pegando o modulo da prompt-sync e adicionando. Depois criando uma prompt (que é o retorno de prompt-sync)
const promptSync = require('prompt-sync');
const prompt = promptSync();
*/
const prompt = require('prompt-sync')(); //Esta forma evita dois passos como acima
const calculadora = require('./calculadora.js');

console.log("Bem-vindo a calculadora!");

let operacao = parseInt(prompt("Digite a operação: "));
while(operacao != 0) {
    let num1 = parseInt(prompt("Digite o primeiro número: "));
    let num2 = parseInt(prompt("Digite o segundo número: "));
    switch(operacao) {
        case 1:
            console.log(`Soma: ${calculadora.soma(num1, num2)}`);
            break;
        
        case 2:
            console.log(`Subtração: ${calculadora.subtracao(num1, num2)}`);
            break;

        case 3:
            console.log(`Multiplicação: ${calculadora.multiplicacao(num1, num2)}`);
            break;

        case 4: 
            console.log(`Divisão: ${calculadora.divisao(num1, num2)}`);
            break;
    }
    operacao = parseInt(prompt("Digite a operação: "));
} 

console.log("Tchauuuuuuuuuuuu!");