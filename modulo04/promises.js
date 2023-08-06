/* 
    Uma Promise é um objeto que pode produzir um vlaor em algum momento no futuro
    Javascript é sincrono, porém trabalha com várias ações assíncronas (consumo API,
leitura de arquivo, chamada no banco). Então, para que o programa não pare e fique
esperando, usamos algumas estratégias: uma delas é a Promise.
    Antigamente tinhamos a ideia de callback, hoje o mais moderno são Promise.
    A Promise tem 3 estágios: Pending (ainda não terminou a execução), Fulfilled 
(a Promise retornou valor) e Rejected (a Promise não retornou valor). Em dois desses estágios,
conseguimos pegar o valor: Com then pegamos o Fulfilled e com catch pegados o erro.
*/

function API(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(password == 'senha')
                resolve(`O usuario ${email} está logado`);
            else
                reject(`Senha ou email inválido`);
        }, 5000);
    })
}

console.log("Inicio da Promise")
let response = API('bruna@gmail.com', 'senh').then(function(response) {
    console.log(response)
}).catch(function(response) {
    console.log(response)
});
console.log("Fim da Promise")