import React from "react";
import "./styles.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Params from "./pages/Params";

/*
  Biblioteaca de criação de rotas para apps React
  Criação de SPA (Single App Application), onde quem renderiza é o próprio Javascript
  Principais elementos:
  - Router: BrowserRouter (rotas comuns) ou HashRouter (rotas com hash)
  - Routes e Links
  - Switch
  - History
*/
export default function App() {
  return (
    //É necessário um BrowserRouter que englobe os Link e o Route
    //Só é possível usar rotas com os componentes filhos do BrowserRouter
    //Um link fora desse container, não será possível
    //Por isso, geralmente usamos BrowserRouter fica no App, no maior da hierarquia do React
    <BrowserRouter>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <ul>
          {/* 
            Aqui setamos o click que irá mudar de tela
          */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user">Users</Link>
          </li>
          <li>
            {/* Passando parametro GET */}
            <Link to="/user/2">User Logged</Link>
          </li>
          <li>
            {/* Aqui, estamos passando um parametro "POST" que pode ser acessadoem params */}
            <Link
              to={{
                pathname: "/params",
                search: "",
                hash: "",
                state: { from: "react course" }
              }}
            >
              Route with State
            </Link>
          </li>
        </ul>
        {
          /*
            Aqui é onde o conteúdo será substituido.
            Apenas uma das telas abaixo é mostrada, e ela é mostrada conforme a seleção em Link
            Temos em Route o caminho <path> e o componente que irá gerar <component>
            O Switch é que atua como um switch case. Ou seja, sem o switch, se tentassemos acessar
            /about, ele abriria / pois ele procura rotas parecidas e é como se não tivesse o break do switch
            Além disso, no caso da rota /, todas as rotas tem /, então todas seriam renderizadas, para evitar isso, colocamos exact
            para ser EXATAMENTE Igual
          */
        }
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {/* 
            Além disso, podemos passar parametros GET na rota
            Que podem ser usados de forma opcional adicionando ?
            Ou nao sendo opcional ath="/user/:id"
          */}
          <Route path="/user/:id?" component={User} />
          <Route path="/params" component={Params} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
