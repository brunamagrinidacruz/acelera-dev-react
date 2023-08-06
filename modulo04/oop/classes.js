//Aqui temos a criação de uma classe
function Person(_first, _last, _gender, _interests) {
    this.name = {
        first: _first,
        last: _last
    };
    this.gender = _gender;
    this.interests = _interests;
}

//O prototype é um objeto compartilhado por todas as instâncias de um objeto
//Como o valor dos métodos não altera, podemos definir os métodos no prototype.
//Desta forma, só o definimios uma vez e todas as instâncias tem acesso
Person.prototype.greeting = function () {
    console.log("Hi, my name is " + this.name.first + " " + this.name.last + "!");
}

//Aqui, estamos criando uma classe que tem os mesmos objetos que Pessoa
function Teacher(_first, _last, _gender, _interests, _subjects) {
    //Isso acontece pois, ao chamar Person, vamos definir as propriedades em "this"
    //E setamos o this como Teacher, ou seja vai ser definido para Teacher
    Person.call(this, _first, _last, _gender, _interests);
    this.subjects = _subjects;
}

//Aqui, estamos criando um objeto de prototype da Pessoa no prototype do Teacher
//Desta forma, apenas as propriedades definidas em prototype da Pessoa aparecem para 
//O Teacher
Teacher.prototype = Object.create(Person.prototype);
Object.defineProperty(Teacher.prototype, 'constructor', { 
    value: Teacher, 
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true 
});

Teacher.prototype.greeting = function() {
    var prefix;
  
    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
      prefix = 'Mr.';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
      prefix = 'Mrs.';
    } else {
      prefix = 'Mx.';
    }
  
    console.log('Hello. My name is ' + this.name.first + ' ' + this.name.last + ', and I teach ' + this.subjects + '.');
};

function Student(_first, _last, _gender, _interests) {
    Person.call(this, _first, _last, _gender, _interests);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = {
    value: Student,
    enumerable: false,
    writable: true
}

Student.prototype.greeting = function() {
    console.log("You're gay");
}

/*
function Student(_first, _last, _gender, _interests) {
}

Student.prototype = new Person();
        Desta forma, ele criaria todo um objeto de Person dentro do Prototype.
    Realmente, Student passaria a ter as mesmas propriedades que o Person, 
    mas como elas estão em Prototype, 2 students não poderiam ter o mesmo
    nome pois o que é definido em Prototype de uma classe, é igual para todas as
    instâncias.
        No formato acima, criamos um prototype do Student apenas com os 
    valoresq ue estão no Prototype de Person, que é como deveria ser.
    Além disso, quando chamamos Person.call, enviamos o contexto da Student,
    desta forma, o this na Person, será student, não Person, ou seja, 
    this.age criara um atributo age dentro de Student (não no Prototype).
*/


/*
    No ECMAScript 2015 (ES6) foi implementado o "Class"
*/

class Pessoa {
    constructor(nome, idade, trabalho) {
        this.nome = nome;
        this.idade = idade;
        this.trabalho = trabalho;
    }

    sayHello() {
        console.log(`Ola, meu nome é ${this.nome} e trabalho de ${this.trabalho}`);
    }

    //Podemos fazer um get ou um set desta forma 
    //Ao utilizar isso, se chamarmos pessoa.sayNome, não precisamos chamar como função
    //Utilizamos esse GET como um atributo
    get sayNome() {
        console.log(this.nome);
    }

    set setNome(nome) {
        this.nome = nome;
    }
}

//O "new" vai ser responsável por dar o contexto do this para o objeto
let pessoa = new Pessoa("Bruna", "19", "VemPraUSP");
console.log(pessoa);
pessoa.sayNome
pessoa.setNome = "Carol"
pessoa.sayNome

//Para herança, temos a palavra "extends"
//Desta forma, o constructor do Aluno será o de Pessoa
//E ele terá acesso a todos os atributos e métodos de Pessoa + os metodos dele
class Aluno extends Pessoa {
    sayUser() {
        console.log(`Ola, sou aluno ${this.nome}`)
    }
}

let aluno = new Aluno("Sheila", "50", "Professora")
aluno.sayUser()
aluno.sayNome

/*
    Alem disso, temos a palavra "super"
que nos permite chamar funcionalidades de Pessoa dentro da classe Professor
    E a palavra "super" permite -sobrescrever- o constructor da classe mão. Ou seja,
além de receber os parametros de Pessoa, podemos receber novos enviando os de Pessoa
para Pessoa e tratando dentro do constructor os que são apenas dele
*/
class Professor extends Pessoa {
    constructor(nome, idade, trabalho, materia) {
        super(nome, idade, trabalho)
        this.materia = materia;
    }

    sayUser() {
        super.sayHello();
        console.log(`Ola, sou o professor ${this.nome} e ensino ${this.materia}`)
    }
}

let professor = new Professor("Jose", "60", "Pintor", "matematica");
professor.sayUser();