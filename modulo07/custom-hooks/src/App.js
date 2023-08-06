import React from "react";
import "./styles.css";

/*
  São utilizados para reaproveitar lógica de state entre componentes
  Substitui as soluções: high order component e render props
  O nome da função com “user” na frente é convenção
*/
import { useInput } from "./hooks/useInput";

export default function App() {
  /*Aqui estamos utilizando um custom-hooks.
    Esse custom-hooks encapsula a propriedade de pegar event.target.value, como?
    Ao utilizar esse useInput, o retorno dele é um setValue que é uma função diferente,
    essa função, por sua vez, faz toda a modificação necessária para receber o event
    e atualizar o valor
  */
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");

  return (
    <div className="App">
      <form>
        <div>
          <input type="text" value={name} onChange={setName} />
        </div>
        <div>
          <input type="email" value={email} onChange={setEmail} />
        </div>
      </form>

      <ul>
        <li>Name: {name}</li>
        <li>Email: {email} </li>
      </ul>
    </div>
  );
}
