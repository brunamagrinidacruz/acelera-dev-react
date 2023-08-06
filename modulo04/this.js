//---------------------------Contexto global
//Estamos no escopo global. Ou seja, o this representa o escopo global
//No browser, seria o "window", no NodeJS, é um objeto GlobalObject
console.log(this);

//--------------------Contexto de objeto
//Nesse caso, o escopo é de objeto
let User = {
    name: 'JavaScript',
    lastName: 'ES6',
    sayName: function() {
        //O this se referencia ao objeto no qual está contido (User)
        //Por isso, tem acesso a tudo nesse escopo
        console.log(`Meu nome é ${this.name}`); 
    }
}
User.sayName();

//----------------------Contexto de função
//Aqui temos um escopo de função
//O this se referencia a essa função
let sayEntireName = function() {
    return `Meu nome é ${this.name} ${this.lastName}`
}
//Como essas duas variaveis não existem no escopo da função, então é undefined
console.log(sayEntireName());
//Aqui, estamos chamando a sayEntireName e estamos setando o contexto dela (o this)
//Como o User. Ao chamar a função, this será o User e então as variaveis estarão definidas
console.log(sayEntireName.call(User));

/*
    Observação: A diferença entre call e apply é que em call, os argumentos
são passados como argumentos da call (usando virgula) e em apply, os argumentos
são passados em um único array. Exemplo:

let User = {
    name: 'JavaScript',
    lastName: 'ES6',
    sayName: function() {
        //O this se referencia ao objeto no qual está contido (User)
        //Por isso, tem acesso a tudo nesse escopo
        console.log(`Meu nome é ${this.name}`); 
    }
}

let sayNumber = function(a, b) {
    console.log(`Numero1: ${a} e numero2: ${b}`)
}

sayNumber.call(User, a, b);
sayNumber.apply(User, [a,b]);

    Agora, o bind, tem a mesma dinâmica que o call, com exceção
de que ele não chama a função, apenas a retorna com as especificações de contexto
definidas.

    Ou seja: as três funcionam servem para definir o contexto (this) mas de formas diferentes,
chamando ou não.
*/

//----------------------Contexto de uma closure
let showLoggedUser = function() {
    let user = "magrini";

    let sayName = function() {
        return `Meu nome ${this.name} e login: ${user}`
    }

    return `O usuario logado é: ${sayName()}`
}

//A closure consegue ver as variaveis, mas não consegue acessar o contexto this
console.log(showLoggedUser());
//Não funciona pois o this não é passado para a closure
console.log(showLoggedUser.call(User));

//Existem algumas formas de resolver

//Usando that. Ou seja, na função externa armazenamos this em uma variavel
//E na interna usamos essa variavel
let showLoggedUserThat = function() {
    let that = this;
    let user = "magrini";

    let sayName = function() {
        return `Meu nome ${that.name} e login: ${user}`
    }

    return `O usuario logado é: ${sayName()}`
}
//Aqui setamos o this da função externa e na função externa
//Salvamos ele pra função interna
console.log(showLoggedUserThat.call(User));

//Usando o call na chamada do sayName
let showLoggedUserCall = function() {
    let user = "magrini";

    let sayName = function() {
        return `Meu nome ${this.name} e login: ${user}`
    }

    return `O usuario logado é: ${sayName.call(this)}`
}
//Aqui setamos o this do showLoggedUserCall
//E na chamada do sayName, setamos o this do sayName para o mesmo do showLoggedUserCall
//Que é o this passado aqui, User
console.log(showLoggedUserCall.call(User));

//Usando arrow function. É a metodologia mais usadas
let showLoggedUserArrow = function() {
    let user = "magrini";

    let sayName = () => {
        return `Meu nome ${this.name} e login: ${user}`
    }

    return `O usuario logado é: ${sayName()}`
}
//O contexto de uma arrow function é sempre a do escopo que ele está contido
//Por isso, aqui damos ao this da showLoggedUserArrow o valor de User
//E como a sayName está contida dentro desta função, ela tem o memso contexto
//Ou seja, mesmo this
console.log(showLoggedUserArrow.call(User));

//-------------------Contexto de constructor
//As funções da classe conseguem acessar o valor do this
//Pois o constructor se responsabiliza de garantir isso
class UserClass {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getName() {
        console.log(this.name)
    }

    getAge() {
        console.log(this.age)
    }
}

//O this sera construido no ato do new
let user = new UserClass("React", 42);
user.getName();
