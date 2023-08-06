import React from "react";
import "./styles.css";

/**
 * O Flux é uma arquitetura (como o MVC) e segue o princípio do fluxo de dados unidirecional
 * Redux é uma biblioteca para administrar o estado da nossa aplicação e é baseado na arquitetura Flux
 * O Redux trabalha com um conceito de:
 * - Subscriber(reducers): Quando um componente se inscreve para saber o valor de um dado. 
 *      Para receber informação, usa connect() em Classe e useSelector em Hooks
 * - Publisher(action): Quando um componente atualiza um dado. 
 *      Para enviar, usa dispatch() em Classe e useDispatch em Hooks
 * Configuração: 
 * - Crie uma store que irá retornar o estado da aplicação
 * - Crie um reducer para a Store
 * - Passe a store para a app com um Provider
 * - Conecte seu componente a Store
 * - Crie uma action para uma modificação
 * - Dispare a action com um dispatch
 */

import Item from "./components/Item";

import { useSelector, useDispatch } from "react-redux";

import {
  getTodos,
  setTodo,
  setTodos,
  deleteTodo,
  setEditing,
  setTodosEditing
} from "./actions";

export default function App() {
  const dispatch = useDispatch();

  /* 
  * O useSelector recebe uma função que recebe como parametro toda a store
  * const store = useSelector(state => state)
  * Na primeira chamada do useSelector, ele chama o reducer e devolve o valor default
  * Depois, o valor é pegado diretamente da store
  */
  const { todo, todos, isEditing } = useSelector(state => state);

  /**
   * Para chamar o reducer e atualizar o valor, é necessário chamar o dispatch e enviar o type 
   */
  React.useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();

    if (isEditing > 0) {
      dispatch(setTodosEditing());
      dispatch(setEditing(-1));
    } else {
      dispatch(setTodos());
    }

    dispatch(setTodo(""));
  };

  const handleChange = event => dispatch(setTodo(event.target.value));
  const handleEdit = index => {
    dispatch(setTodo(todos[index]));
    dispatch(setEditing(index));
  };
  const handleDelete = index => dispatch(deleteTodo(index));

  return (
    <div className="App">
      <h1>ToDo</h1>

      <div>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="todo" />
            <input type="text" value={todo} onChange={handleChange} />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>

      <ul className="todos">
        {todos.map((todo, index) => (
          <Item
            key={`${todo}-${index}`}
            todo={todo}
            index={index}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
