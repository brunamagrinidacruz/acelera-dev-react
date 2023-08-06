import React from "react";

/**
 * A diferença do renderProps e High Order Components para o Hook é que o Hook não retorna um componente
 * No hooks, você retorna um dados.
 * Esse hook ele cria uma variavel e uma função de incrementar e decrementar e devolve a quem chamou
 * Na maioria das vezes, vamos usar Hook costumizados ao invés dos outros
 */
function useCount() {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return {
    increment,
    decrement,
    count
  };
}

export default useCount;
