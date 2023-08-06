import React from "react";
import "./styles.css";

import HOC from "./hoc";
import RenderProps from "./renderProps";
import CustomHook from "./customHooks";

/*
  Mantenha os componentes pequenos e específicos
  Criar hooks personalizados
  CSS no Javascript
  Escrever testes
*/

export default function App() {
  const [selected, setSelected] = React.useState("");
  let Pattern = () => null;

  const handleSelect = event => setSelected(event.target.name);

  console.log("Executando")
  if (selected === "hoc") {
    Pattern = HOC;
  } else if (selected === "renderProps") {
    Pattern = RenderProps;
  } else if (selected === "customHooks") {
    Pattern = CustomHook;
  }

  return (
    <div className="App">
      <h1>Hello React Patterns</h1>

      <div className="App-buttons">
        <button onClick={handleSelect} name="hoc">
          High Order Components (HOC)
        </button>
        <button onClick={handleSelect} name="renderProps">
          Render Props
        </button>
        <button onClick={handleSelect} name="customHooks">
          Custom Hooks
        </button>
      </div>

      <Pattern />
    </div>
  );
}
