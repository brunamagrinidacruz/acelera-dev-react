import React from 'react';
import './App.css';
import Button from "./components/Button" 
import Filter from "./components/Filter" 
import Select from "./components/Select"
import {
  Card,
  CardImage,
  CardBody,
  CardText,
  CardTitle
} from "./components/Card" 
import { 
  filterByStatus
} from "./util/filter.js"

import { URL } from './constants'

// import data from './data/data.json'

/*
*    Um componente em React tem um ciclo de vida: fase de montagem, atualização e desmontagem
* Cada fase aciona alguns métodos do componente. Ou seja, podemos manipular essas fases.
* Para termos acesso a essas fases de vida, precisamos fazer os componentes em React como classes
* E além disso, ela deve extender React.Component
* - Montagem (Mounting): Fase de criação do componente na página
*     1. Chama a função constructor para inicialização dos valores das propriedades e é chamado apenas 1 vez
*     2. Após o constructor o render é chamado, ele retorna o coódigo do componente
*     3. Quando o render termina, o componentDidMount é chamado, nele utilizamos as chamadas a API, event listeners e etc
* - Atualização (Updating): Fase que ocorre após chamar o método this.setState(). Toda vez que um evento ocorre
* (click do mouse, usuário digitando, chamada a API) chamamos o this.setState passando os novos valores para que a tela se atualize
*     1. Após o this.setState ser chamado, o método render é chamado com o novo state para renderizar o component
*     2. Qunado o render termina o método componentDidUpdate é chamado, nele rodamos alguma função que avisa que o component atualizou
* - Desmontagem: Fase de retida do componente da página. Ele é utilizado para remover event listeners, fazer
* chamadas a api, remover timers. Geralmente eventos iniicados no ComponentDidMount
*     1. Chama o método componentWilUnmount
*/

class App extends React.Component {
  constructor() {
    super();

    //State é uma variável que quando atualizada, a página é refeita
    this.state = {
      data: [],
      characteres: [],
      loading: false
    }
  }

  async componentDidMount() {
    this.setState({
      loading: true
    })

    const response = await fetch(URL)
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        return data.results
      });

      this.setState({
        data: response,
        characteres: response,
        loading: false
      })
  }

  handleClick(event, status) {
    event.preventDefault();
    if(status == "") 
      this.setState({
        characteres: this.state.data,
      })
    else
      this.setState({
        characteres: filterByStatus(this.state.data, status)
      })
  }

  render() { //Metodo herdado de React.Component
    return (
      <div className="app">
          <div data-testid="all-status">
            <Filter>
              <Button titulo="Todos" handleClick={(event) => this.handleClick(event, "")}/>
              <Button titulo="Vivo" handleClick={(event) => this.handleClick(event, "Alive")}/>
              <Button titulo="Morto" handleClick={(event) => this.handleClick(event, "Dead")}/>
              <Button titulo="Desconhecido" handleClick={(event) => this.handleClick(event, "unknown")}/>
            </Filter>
          </div>

          <Filter>
            <Button titulo="Todos"/>
            <Button titulo="Homem"/>
            <Button titulo="Mulher"/>
            <Button titulo="Desconhecido"/>
          </Filter>

          <Select itens={[1, 2, 3, 4, 5]}>
          </Select>

          {
            this.state.loading ? <div>Loading...</div> : null
          } 

          <section className="section-card">
            { 
              this.state.characteres.map(character => {
                return (
                  <div data-testid="character" key={character.id}>
                    <Card>
                      <CardImage src={character.image}/>
                      <CardBody>
                        <CardTitle title={character.name}></CardTitle>
                        <CardText text={`Sexo: ${character.gender}`}/>
                        <CardText text={`Situação: ${character.status}`}/>
                      </CardBody>
                    </Card>
                  </div>
                )
              })
            }
          </section>
          

      </div>
    );
  }
}

export default App;
