function add(num1 = 0, num2 = 0) {
    return num1 + num2;
}

function sub(num1 = 0, num2 = 0) {
    return num1 - num2;
}

function mult(num1 = 0, num2 = 0) {
    return num1 * num2;
}

function div(num1 = 0, num2 = 1) {
    return num1 / num2;
}

module.exports = {
    soma: add,
    subtracao: sub,
    multiplicacao: mult,
    divisao: div
}