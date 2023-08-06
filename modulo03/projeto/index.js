const prompt = require('prompt-sync')();
const fibonacci = require('./fibonacci');

function imprimir_menu() {
    console.log(
`0 - Encerrar.
1 - Calcular Fibonacci até passar de 350.
2 - Calcular uma quantia de Fibonacci baseada num número informado (maior ou igual a 3).
3 - Verificar se é Fibonacci.`
    );
}

let operacao;
let value;

imprimir_menu();
operacao = prompt("Digite a operação: ");
while(operacao != "0") {
    switch(operacao) {
        case "1":
            console.log(fibonacci.calculeteFibonnaci());
            break;
        case "2":
            value = prompt("Digite o valor de entrada: ");
            console.log(fibonacci.calculeteFibonnaci(value));
            break;
        case "3":
            value = prompt("Digite o valor de entrada: ");
            console.log(fibonacci.isFibonacci(value));
            break;
     }
    imprimir_menu();
    operacao = prompt("Digite a operação: ");    
}

console.log("Até mais!");