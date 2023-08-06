const calculadora = require('./calculadora');

//O primeiro parametro é uma mensagem indicativa sobre o teste
//O segundo parametro é uma função que contém os testes
describe("Calculadora", function() {
    //Recebe o titulo e o teste
    it('teste exemplo', function() {
        const number1 = 23;
        const number2 = 7;
        //Esperamos que [algo] seja [algo]
        //expect(23 + 7).toBe(30) Esperamos que 23 + 7 seja 30
        expect(number1 + number2).toBe(30);
        //Tambem podemos esperar algo negado
        expect(number1 + number2).not.toBe(31);
    })

    describe("Soma", function() {
        it("retorna 3 quando 2 + 1", function() {
            const number1 = 2;
            const number2 = 1;
            expect(calculadora.soma(number1, number2)).toBe(3);
        })
        it("retorna 0 quando nada passado", function() {
            expect(calculadora.soma()).toBe(0);
        })
    })

    describe("Subtracao", function() {
        it("retorna 1 quando 2 - 1", function() {
            const number1 = 2;
            const number2 = 1;
            expect(calculadora.subtracao(number1, number2)).toBe(1);
        })
        it("retorna 0 quando nada passado", function() {
            expect(calculadora.subtracao()).toBe(0);
        })
    })

    describe("Multiplicacao", function() {
        it("retorna 6 quando 2 * 3", function() {
            const number1 = 2;
            const number2 = 3;
            expect(calculadora.multiplicacao(number1, number2)).toBe(6);
        })
        it("retorna 0 quando nada passado", function() {
            expect(calculadora.multiplicacao()).toBe(0);
        })
    })

    describe("Divisao", function() {
        it("retorna 2 quando 6 / 3", function() {
            const number1 = 6;
            const number2 = 3;
            expect(calculadora.divisao(number1, number2)).toBe(2);
        })
        it("retorna 0 quando nada passado", function() {
            expect(calculadora.divisao()).toBe(0);
        })
        it("retorna 0 quando quando denominador é 0", function() {
            const number1 = 0;
            const number2 = 0;
            expect(calculadora.divisao(number1, number2)).toBe(0);
        })
    })


})