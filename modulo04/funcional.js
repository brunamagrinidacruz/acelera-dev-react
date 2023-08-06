/*
    Programação funcional é o processo da construção de
software pela composição de funções puras, evitando o compartilhamento
de estado, mutação de dados e efeitos colaterais.
    Função pura é uma função a qual:
- Dado a mesma entrada ele retorna a mesma saída
- Não tem efeitos colaterais. Ou seja, não altera algo fora dela
    Como temos cada função atuando de uma forma, o Teste de Unidade
fica mais simples, pois em POO temos que fazer muitos objetos falsos.

    A composição de funções é o processo de combinar duas
ou mais funções para produzir uma nova função ou realizar
alguma computação. Ou seja, f(g(x))
    
    Estado compartilhado é qualquer variável, objeto ou espaço
em memória que existe em um escopo compartilhado, ou a propriedade
de um objeto sendo passada entre os escopos. Como exemplo,
um array sendo passado a uma função, pois em Javascript, a passagem
de array por parametro é por referência, ou seja, não é feito uma cópia,
é usado mesmo array

    Imutabilidade: um objeto imutável é um objeto que não pode ser
modificado depois de criado. No exemplo anterior, se tivermos um array
sendo passado em parametros mas queremos ele imutável, toda função que ira
fazer uma operação em cima dele, dele fazer uma cópia e retornar o valor,
ou retornar um novo array, nunca mudá-lo.

    High Order Função (Função de Priemira Ordem): Qualquer função
que recebe uma função como argumento e retorna/chama uma função. É utilizado
para:
- Abstrair ou isolar ações, efeitos, fluxo assincrono (callbacks, promisses) e monads
- Cria utilitários
- Recebe uma lista de funções e retorna uma composição dela

    Cururying é o processo de transforma uma função com múltiplos argumentos
em uma sequência de funções encadeadas: Exemplo: f(a, b, c) pode ser
transformado em f(a)(b)(c)
*/

//Função pura pois não altera parametros externos e retorna
//O mesmo valor para mesma entrada
function somar(num1, num2) {
    return num1 + num2;
}
console.log(somar(2, 2));

//Composição de função (e funções puras)
console.log("---------------------------")
function multiplicar(num1, num2) {
    let resultado = 0;
    for(let i =0; i < num2; i++) {
        resultado = somar(resultado, num1);
    }
    return resultado
}
console.log(multiplicar(4, 4));

//Estado compartilhado
console.log("---------------------------")
let array = [1, 2, 3, 4, 5];
function multiplicacaoArray(numeros, multiplicar) {
    for(let i = 0; i < numeros.length; i++) {
        numeros[i] = numeros[i] * multiplicar;
    }
} 
console.log(array)
multiplicacaoArray(array, 2);
console.log(array);

//Ao aplicar imutabilidade
console.log("---------------------------")
function multiplicacaoArrayImutavel(numeros, multiplicar) {
    let newNumeros = []
    for(let i = 0; i < numeros.length; i++) {
        newNumeros[i] = numeros[i] * multiplicar
    }
    return newNumeros
}
console.log(array)
console.log(multiplicacaoArrayImutavel(array, 2))
console.log(array)

//High Order Função
console.log("---------------------------")
function nome(callback) {
    let nome = "React"
    callback(nome);
}

function print(message) {
    console.log(message)
}
nome(print);

/*
    Na programação funcional, é utilizado bastante métodos de arrays
- Map: método que percorre todo o array e retorna um novo array modificado do mesmo tamanho
- Filter: método que percorre todo o array e volta um novo array do mesmo tamanho
ou menor de acordo com a condição para filtrar os elementos
- Reduce: método que percorre todo o array, porém pode retornar novo array,
um valor, um objeto
    Esses métodos seguem o conceito da imutabilidade
*/
console.log("---------------------------")
let animais = ['dog', 'cat', 'lion', 'bird']
console.log(animais);
let numeros = [12, 13, 46, 45]
console.log(numeros);

//O map recebe uma função e ele injeta como parametros o elemento e o index (iniciando em 0)
let novosAnimais = animais.map((animal, index) => {
    return {
        name: animal,
        id: numeros[index]
    }
})
console.log(novosAnimais)

//O filter recebe uma função e ele injeta como parametros o elemento e espera true ou false como retorno
let animaisPares = novosAnimais.filter((animal) => {
    return animal.id % 2 == 0 //Retorna true para um objeto se ele tiver id par
})
console.log(animaisPares) 

let animaisPeso = novosAnimais.map((animal) => {
    return {
        name: animal.name,
        peso: animal.id
    }
})
console.log(animaisPeso);
//O reduce recebe uma função e um valor inicial para a variavel que é injetada na função, além de animal e index
//Ou seja, ele tem um valor inicial que é o segundo parametro do reduce e esse valor inicial é injetado
//Pelo reduce na função passada como primeiro parametro. A cada rodada, o retorno é injetado
//Na próxima iteração
let somatoriaPeso = animaisPeso.reduce((initialValue, animal, index) => {
    return initialValue + animal.peso
}, 0)
console.log(somatoriaPeso)

//Lembrando, aqui houve a Imutabilidade, sempre criado novos objetos