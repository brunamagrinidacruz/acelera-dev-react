import React from 'react';
import './App.css';
import Button from "./components/Button" //Importando o componente
import Filter from "./components/Filter" //Importando o componente
import Select from "./components/Select"
import {
  Card,
  CardImage,
  CardBody,
  CardText,
  CardTitle
} from "./components/Card" 

/*
* Criação de um componente no mais simples estilo.
* Ele é uma função que retornam uma JSX (HTML)
* Todos os componentes devem ter inicio com letra maíuscula
* Para chamar, dentro do componente, usamos <Button />
function Button() {
  return (
    <button>Click</button>
  )
}
*/

/*
*    Um componente em React tem um ciclo de vida: fase de montagem, atualização e desmontagem
* Cada fase aciona alguns métodos do componente. Ou seja, podemos manipular essas fases.
* Para termos acesso a essas fases de vida, precisamos fazer os componentes em React como classes
* E além disso, ela deve extender React.Component
* Por isso, vamos atualizar nossa App para ser uma classe
* - Montagem (Mounting): Fase de criação do componente na página
*     1. Chama a função constructor para inicialização dos valores das propriedades e é chamado apenas 1 vez
*     2. Após o constructor o render é chamado, ele retorna o coódigo do componente
*     3. Quando o render termina, o componentDidMount é chamado, nele utilizamos as chamadas a API, event listeners e etc
*/

function App() {
  return (
    <div className="app">
        <Filter>
          <Button titulo="Todos"/>
          <Button titulo="Vivo"/>
          <Button titulo="Morto"/>
          <Button titulo="Desconhecido"/>
        </Filter>

        <Filter>
          <Button titulo="Todos"/>
          <Button titulo="Homem"/>
          <Button titulo="Mulher"/>
          <Button titulo="Desconhecido"/>
        </Filter>

        <Select>
        </Select>

        <section className="section-card">
          <Card>
            <CardImage src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
            <CardBody>
              <CardTitle title="Rick Sanchez"></CardTitle>
              <CardText text="Sexo: Male"/>
              <CardText text="Situação: Alive"/>
            </CardBody>
          </Card>
        </section>

    </div>
  );
}

export default App;
